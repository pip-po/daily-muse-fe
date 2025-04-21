"use client";

import { axiosInstance } from "@/lib/axios";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

const useRegister = () => {
  return useMutation({
    mutationFn: async (payload: Omit<User, "id">) => {
      const { data } = await axiosInstance.post("/auth/register", payload);
      return data;
    },
    onSuccess: () => {
      toast.success("Register Success");
    },
    onError: (error: AxiosError<any>) => {
      alert(error.response?.data.message);
    },
  });
};

export default useRegister;
