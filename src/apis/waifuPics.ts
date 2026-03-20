import { ApiWrapper } from './apiWrapper';
import { safeFetchJSON } from '../utils/fetcher';

interface WaifuPicsResponse {
  url: string;
}

export class WaifuPics implements ApiWrapper {
  public name = 'waifuPics';
  private baseURL = 'https://api.waifu.pics/sfw';

  async fetchAction({ action }: { action: string; id?: string }): Promise<string | null> {
    const result = await safeFetchJSON<WaifuPicsResponse>(
      `${this.baseURL}/${action}`
    );

    if (result.isErr()) return null;

    return result.unwrap()?.url || null;
  }
}