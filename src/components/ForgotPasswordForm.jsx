"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/Typography";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
});

export function ForgotPasswordForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  function onSubmit(values) {
    console.log("Password reset requested for:", values.email);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md border-0 shadow-none text-center">
        <CardContent className="p-0">
          <Typography as="h2" className="mb-4">
            Check Your Email
          </Typography>
          <Typography variant="muted">
            If an account with that email exists, we've sent a link to reset
            your password. Please check your inbox and spam folder.
          </Typography>
          <Button
            variant="default"
            className="mt-4"
            onClick={() => navigate("/reset-password")}
          >
            Reset Link in Email
          </Button>
        </CardContent>
      </Card>
    );
  }

  // แสดงฟอร์มกรอกอีเมล
  return (
    <Card className="w-full max-w-md border-0 shadow-none">
      <CardContent className="p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
