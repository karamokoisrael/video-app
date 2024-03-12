export const getAvatarUrl = (seed: any = null) => {
  return `https://avatars.dicebear.com/api/adventurer-neutral/${seed}.svg`;
};

export const openExternalLink = async (link: string, isMobile?: boolean, store?: any) => {
  (window as Record<string, any>).open(link, '_blank');
};

export const getAsset = (url: string) => `/${url}`;

export function formatDir(dir: string): string {
  return process.env.PUBLIC_URL + dir;
}

export function serializeLayoutParam(param: any){
  return JSON.stringify(param);
}


export function deserializeLayoutParam<T>(param: T){
  return JSON.parse(param as string) as T;
}