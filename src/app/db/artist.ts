"use server";

import { fetchData } from "./sanity";

export default async function getMember(role: string): Promise<any[]> {
  const memberList = await fetchData<any[]>(`
			*[_type == 'members' && role == '${role}']{
				...
			}
		`);
  return memberList;
}
