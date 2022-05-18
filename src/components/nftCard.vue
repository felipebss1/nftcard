<template>
  <div class="w-10/12 mx-auto lg:w-11/12 box-border">
    <figure class="container">
      <img class="h-64 w-full mx-auto my-4 rounded-lg" src="../assets/img/image-equilibrium.jpg"
        alt="nft image preview" />
      <div class="middle">
        <img src="../assets/img/icon-view.svg" alt="preview icon" class="pic" />
      </div>
    </figure>
    <div>
      <p class="pb-3 font-semibold text-xl text-white hover:text-[#00fff7] hover:cursor-pointer">
        Equilibrium #3429
      </p>
      <p class="pb-4 text-base text-[#8bacda]">
        Our Equilibrium collection promotes balance and calm.
      </p>
    </div>
    <div class="flex justify-between mb-5 pb-3 border-b border-[#2f415b]">
      <div class="flex items-center">
        <img class="w-3 h-5" src="../assets/img/icon-ethereum.svg" alt="ethereum icon" />
        <span class="text-[#00fff7] text-sm font-normal pl-2"> 0.041 ETH</span>
      </div>
      <div class="flex items-center">
        <img class="w-4 h-4" src="../assets/img/icon-clock.svg" alt="clock icon" />
        <span class="text-[#8bacda] text-sm pl-2">3 days left</span>
      </div>
    </div>
    <div class="flex justify-start items-center mb-6">
      <figure class="pr-3">
        <img class="w-9 border-white border-2 rounded-full" src="../assets/img/image-avatar.png" alt="avatar image" />
      </figure>
      <span class="text-[#8bacda] text-sm">Creation of
        <span class="text-white hover:text-[#00fff7] hover:cursor-pointer">Jules Wyvern</span></span>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  position: relative;
  cursor: pointer;
}

.middle:hover {
  opacity: .6;
}

.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 0%;
  background-color: #00fff7;
  border-radius: 0.5rem;
  width: 100%;
  height: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
