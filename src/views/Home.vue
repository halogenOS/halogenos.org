<template lang="pug">
    Page.home-page
        CoolCard(
            title="It blows your mind"
            subtitle="Simple, smooth and performant"
        )
            div.btn-cont
                Btn.to-download(
                    rounded
                    @click.native="$router.push('/download')"
                )
                    | Get it now
</template>

<script>
import Page from "@/components/Page"
import CoolCard from "@/components/CoolCard"
import Btn from "@/components/Btn"

export default {
  name: 'home',
  components: {
      Page,
      CoolCard,
      Btn
  }
}
</script>

<style lang="sass" scoped>
    @import @/css/include/design

    .btn-cont
        display: flex

    .to-download
        margin: 16px 0 8px
        font-family: $primary-font-family
</style>
