import api from "../services/api";
import { getItem } from "./storage";
let token: string | null = "";

export async function loadCategories() {
  token = getItem("token");

  try {
    const {data} = await api.get("/categories/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const orderedCategories = data.sort(
      (a: number, b: number) => a - b
    );

    return orderedCategories;
  } catch (error: any) {
    console.log(error.response);
  }
}

export async function loadRecipes() {
  token = getItem("token");

  try {
    const {data} = await api.get("/recipes/all");

    return data;
  } catch (error: any) {
    console.log(error.response);
  }
}
export async function loadComments() {
  token = getItem("token");

  try {
    const {data} = await api.get("/recipes/commets", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error: any) {
    console.log(error.response);
  }
}
export async function loadFavrites() {
  token = getItem("token");

  try {
    const {data} = await api.get("/recipes/favorites", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error: any) {
    console.log(error.response);
  }
}
