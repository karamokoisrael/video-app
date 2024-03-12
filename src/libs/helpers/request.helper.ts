/* eslint-disable no-prototype-builtins */
import { env } from "@/configurations/constants/environment";
import { getAsset } from "./layout.helper";

export const formatApiUrl = (url: string) => {
  return `${env.apiUrl}${url}`;
};

export const formatWebsiteUrl = (url: string) => {
  return `${env.webUrl}${url}`;
};

export const stringifyQuery = (query: Record<string, any>) => {
  return Object.keys(query)
    .map((key) => (key + "=" + query.hasOwnProperty(key) ? query[key] : ""))
    .join("&");
};

export const getUploadedFileUrl = (file: string) => {
  return `${env.apiUrl}/Uploads/${file}`;
};

export const formatLink = (link: string | null | undefined) => {
  if (link === "/" || link === "*" || link === "") return "/";
  if (link === null) return "";
  if (link === undefined) return "";
  if (link.includes("http")) return link;
  return `/${link}`;
};

export const formatPaymentMethodIconUrl = (url: string) => {
  if (url?.startsWith("http")) return url;
  return getAsset(`img/icons/payment-methods/${url?.replace("/", "")}`);
};
