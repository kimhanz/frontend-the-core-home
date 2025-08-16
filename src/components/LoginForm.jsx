"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Eye, EyeOff, Undo2 } from "lucide-react";

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
  password: z.string().min(1, { message: "Password is required." }),
});

export function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });

  function onSubmit(values) {
    console.log("Form submitted with:", values);
    alert(`Login successful with email: ${values.email}`);
  }

  return (
    <Card className="w-full max-w-md border-0 shadow-none">
      <CardContent className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="@Email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <div className="flex items-center gap-3">
                    <FormControl className="flex-grow">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <Eye className="h-4 w-4" />
                      ) : (
                        <EyeOff className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button variant="default" type="submit" className="w-full">
              Login <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        </Form>

        <div className="mt-6 flex flex-col items-center gap-4">
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password ? <Undo2 className="h-4 w-4" />
          </Button>
          <Typography variant="muted">
            Don't have an account ?{" "}
            <Button
              type="button"
              variant="link"
              className="p-0 underline underline-offset-8"
              onClick={() => navigate("/register")}
            >
              Create an account
            </Button>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
