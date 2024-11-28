<script setup>
import DefaultTheme from "vitepress/theme";
import { data as posts } from "./posts.data.mts";
import { withBase } from "vitepress";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #home-features-after>
      <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <ul>
          <li
            class="py-4"
            v-for="{ title, url, date, excerpt } of posts"
          >
          <div class="bg-gray-100 dark:bg-slate-200 w-full h-1 mb-8"></div>

            <article
              class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"
            >
              <time :datetime="new Date(date.time).toISOString()">{{
                date.string
              }}</time>
              <div class="space-y-5 xl:col-span-3">
                <div class="space-y-6">
                  <h2 class="text-2xl leading-8 font-bold tracking-tight">
                    <a class="text-gray-900 dark:text-white" :href="withBase(url)">{{
                      title
                    }}</a>
                  </h2>
                  <div
                    v-if="excerpt"
                    class="prose dark:prose-invert max-w-none text-gray-500 dark:text-gray-300"
                    v-html="excerpt"
                  ></div>
                </div>
                <div class="text-base leading-6 font-medium">
                  <a class="link" aria-lable="read more" :href="withBase(url)"
                    >Read more -></a
                  >
                </div>
              </div>
            </article>

          </li>
        </ul>
      </div>
    </template>
  </Layout>
</template>
