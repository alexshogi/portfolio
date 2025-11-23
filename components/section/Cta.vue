<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <LayoutScrollSmooth>
    <section class="max-w-5xl mx-auto px-4 lg:px-0">
      <div class="mesh-gradient flex items-center flex-col rounded-3xl border bg-[#0b061a] border-white/10 p-10 relative">
        <div class="flex flex-col items-center">
          <h2 class="text-center !max-w-xl section-title" v-html="$t('CTA.label')"></h2>
          <p class="paragraph max-w-xl text-center mt-8" v-html="$t('CTA.description')"></p>
          <Button class="mt-10" to="https://t.me/shogiboss" variant="btn-primary" :label="$t('CTA.collaboration')"/>

          <div class="my-8 w-4/5 h-[1px] bg-gradient-to-r from-white/0 via-white/20 to-white/0 "></div>

          <div class="flex items-center justify-between gap-2">
            <VsxIcon
              iconName="LanguageSquare"
              :size="24"
              color="#5584FF"
              type="linear"
            />
            <NuxtLink
              class="text-white group text-xl lg:text-base"
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >
              {{ locale.name }}
            </NuxtLink>
          </div>

          <div class="absolute  bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"></div>
          <div class="-z-10 absolute bottom-4 w-96 bg-[#0b50e5] rounded-full blur-2xl h-40 animate-pulse"></div>
        </div>
      </div>
    </section>
  </LayoutScrollSmooth>
</template>
