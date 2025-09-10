"use client";

import { useQuery } from "@tanstack/react-query";
import { Therapy } from "@/type";
import { request } from "../../request/index";

export const getTherapy = async (page: number, limit: number) => {
  const response = await request.get<{
    data: Therapy[];
    total: number;
  }>(`/therapist?page=${page}&limit=${limit}`);
  return response;
};

export const useTherapy = (page: number, limit: number) => {
  return useQuery({
    queryKey: ["getTherapy", page, limit],
    queryFn: async () => {
      return getTherapy(page, limit);
    },
  });
};
