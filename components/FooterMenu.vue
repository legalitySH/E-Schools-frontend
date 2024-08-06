<script setup lang="ts">

</script>

<template>
  <footer class="shadow-md border bg-[#f5f5f5]">
    <div class="container mx-auto h-32 flex items-center gap-6 mt-4 flex-col">
      <p class="font-bold text-xl text-blue-600">Email:
        <span class="font-medium text-black">hello@eschools.com</span>
      </p>
      <ul class=" flex gap-10">
        <li><a class="menu-item" href="/possibilities">Possibilities</a></li>
        <li><a class="menu-item" href="/tariffs">Tariffs</a></li>
        <li><a class="menu-item" href="/faq">FAQ</a></li>
        <li><a class="menu-item" href="/contacts">Contacts</a></li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.menu-item {
  font-family: 'Prompt', sans-serif;
  font-size: 1.1rem;
}

.menu-item:hover {
  transition: all 0.6s;
  color: #0680f3;
  border-bottom: 1px solid #177cdf;
}
</style>