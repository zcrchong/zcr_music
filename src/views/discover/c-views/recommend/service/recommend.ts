import zcrRequest from "@/service";

export function getBanners() {
  return zcrRequest.get({
    url: "/banner",
  });
}
