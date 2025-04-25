"use client"

import { z } from "zod"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
    confederation: z.string().min(1, "Please select a confederation"),
    jeName: z.string().min(1, "Please select a JE name"),
    role: z.string().min(1, "Please select a role"),
    cinOrPassport: z.string().min(2, "Required"),
    image: z
        .instanceof(File)
        .refine(file => file.size > 0, "Image is required"),
})

const Page = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            confederation: "",
            jeName: "",
            role: "",
            cinOrPassport: "",
            image: undefined as unknown as File,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                <FormField
                    control={form.control}
                    name="confederation"
                    render={({ field }) => (
                        <FormItem className="w-full ">
                            <FormLabel className="text-black">Confédération</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="text-black border border-black">
                                        <SelectValue placeholder="Select Confédération" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-black">
                                    <SelectItem value="confed1">Confédération Alpha</SelectItem>
                                    <SelectItem value="confed2">Confédération Beta</SelectItem>
                                    <SelectItem value="confed3">Confédération Gamma</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="jeName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-black">JE Name</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="text-black border border-black">
                                        <SelectValue placeholder="Select JE Name" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-black">
                                    <SelectItem value="je1">JE Innovate</SelectItem>
                                    <SelectItem value="je2">JE Vision</SelectItem>
                                    <SelectItem value="je3">JE Future</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-black">Role</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="text-black border border-black">
                                        <SelectValue placeholder="Select Role" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-black">
                                    <SelectItem value="president">President</SelectItem>
                                    <SelectItem value="vp">Vice President</SelectItem>
                                    <SelectItem value="member">Member</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="cinOrPassport"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-black">CIN / Passport</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter CIN or Passport"
                                    className="text-black outline-none placeholder:text-gray-400 border border-black focus:border-black shad-input "
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="image"
                    render={({ field: { onChange, ...fieldProps } }) => (
                        <FormItem>
                            <FormLabel className="text-black">Image Upload</FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    className="text-black  placeholder:text-gray-400 border border-black"
                                    onChange={(e) => {
                                        if (e.target.files?.[0]) {
                                            onChange(e.target.files[0])
                                        }
                                    }}
                                    {...fieldProps}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button className="bg-black text-white hover:bg-gray-900" type="submit">
                    Submit
                </Button>
            </form>
        </Form>
    )
}

export default Page
