import { buttonTextVariants, buttonVariants } from "@/components/ui/button";
import { TextClassContext } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import * as AlertDialogPrimitive from "@rn-primitives/alert-dialog";
import * as React from "react";
import { View, type ViewProps } from "react-native";

export function AlertDialogHeader({ className, ...props }: ViewProps) {
  return (
    <TextClassContext.Provider value="text-center sm:text-left">
      <View className={cn("flex flex-col gap-2", className)} {...props} />
    </TextClassContext.Provider>
  );
}

export function AlertDialogFooter({ className, ...props }: ViewProps) {
  return (
    <View
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

export function AlertDialogTitle({
  className,
  ...props
}: AlertDialogPrimitive.TitleProps &
  React.RefAttributes<AlertDialogPrimitive.TitleRef>) {
  return (
    <AlertDialogPrimitive.Title
      className={cn("text-foreground text-lg font-semibold", className)}
      {...props}
    />
  );
}

export function AlertDialogDescription({
  className,
  ...props
}: AlertDialogPrimitive.DescriptionProps &
  React.RefAttributes<AlertDialogPrimitive.DescriptionRef>) {
  return (
    <AlertDialogPrimitive.Description
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export function AlertDialogAction({
  className,
  ...props
}: AlertDialogPrimitive.ActionProps &
  React.RefAttributes<AlertDialogPrimitive.ActionRef>) {
  return (
    <TextClassContext.Provider value={buttonTextVariants({ className })}>
      <AlertDialogPrimitive.Action
        className={cn(buttonVariants(), className)}
        {...props}
      />
    </TextClassContext.Provider>
  );
}

export function AlertDialogCancel({
  className,
  ...props
}: AlertDialogPrimitive.CancelProps &
  React.RefAttributes<AlertDialogPrimitive.CancelRef>) {
  return (
    <TextClassContext.Provider
      value={buttonTextVariants({ className, variant: "outline" })}
    >
      <AlertDialogPrimitive.Cancel
        className={cn(buttonVariants({ variant: "outline" }), className)}
        {...props}
      />
    </TextClassContext.Provider>
  );
}

