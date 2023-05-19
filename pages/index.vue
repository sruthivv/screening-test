<template>
<div class="affix-container ">
  <el-affix  :offset="600">
    <el-button type="default" class="rounded-e-full btn btn-rounded bg-white py-4 px-3.5 "><span class="capitalize text-gray-950 m-2">home</span><span class="capitalize text-gray-950 m-2">about</span><span class="capitalize text-gray-950 m-2">portfolio</span><span class="capitalize text-gray-950 m-2">blog</span><span class="capitalize text-gray-950 m-2">career</span><span class="h-9 w-9 rounded-full border border-gray-800 m-2 text item center"><Icon name="ph:phone-call-thin" class="align-items-center text-center
       font-bold text-2xl mt-1" /></span><span class="h-9 w-9 rounded-full bg-gray-900"><Icon name="openmoji:right-arrow" class="text-white text-2xl mt-1"/></span></el-button>
  </el-affix>
    <!-- ------------------------mainContainer-------------------------->
    <div><div class="relative bg-gray-950">
        <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div
            class="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6"
          >
            <div class="mx-auto max-w-2xl lg:mx-0 mt-15">
                <div class="d-flex"><div> <img
                    class="h-11"
                    src="~/assets/images/iocodlogo2.png"
                    alt="Your Company"
                  /></div>
                <div><h2 class="text-white font-thin">iocod</h2></div></div>
             
              <h1
                class="mt-15 text-4xl font-normal tracking-tight text-white sm:mt-10 sm:text-6xl"
              >
                Unleash the potential of the digital transformation
              </h1>
              <p class="mt-6 text-lg leading-8 text-white">
                <span class="text-lime-300">i</span>nput your business and operations,and we'll <span class="text-lime-300">o</span>utput the optimal software. <span class="text-lime-300">cod</span>ed by real problem solvers
              </p>
              <div class="mt-10 flex items-center gap-x-6">
                <button
                  class="rounded-full text-2xl text-capitalize font-thin py-2.5 bg-transparent border-gray-200 border px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started <Icon name="openmoji:right-arrow" class="text-white text-2xl"/>
                </button>
              </div>
              <div class="col-sm-6">
                <div class="absolute bottom-0 bg-white h-20 w-full p-0 d-flex space-x-16"><div class="ml-5 text-center flex align-items-center text-5xl"><Icon name="vscode-icons:file-type-vue" /></div><div class="flex text-center align-items-center text-5xl"><Icon name="devicon:nuxtjs" /></div><div class="flex text-center align-items-center text-5xl"><Icon name="vscode-icons:file-type-flutter" /></div><div class="text-center flex align-items-center text-5xl"><Icon name="vscode-icons:file-type-node" /></div><div class="text-center flex align-items-center text-5xl"><Icon name="logos:laravel" /></div></div>
            </div> 
            </div>
           </div>
         <!-- <div class="h-20 w-20 rounded-full bg-lime-400 absolute -right-0 text-center"><Icon name="openmoji:right-arrow" class="text-gray-950" /></div> -->
          <div
            class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0"
          >
          
            <img
              class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              src="~/assets/images/screeningTest1.png"
              alt=""
            />
            <div class="absolute mt-10 top-9 right-5 d-flex justify-between"><div  class="mr-4 rounded-full"><button class="btn btn-primary bg-bkue-600 text-white text-capitalize rounded-full py-2 px-2.5"><Icon name="material-symbols:phone-android" /> connect us</button></div>
            <div>
            <button class="h-12 w-12 bg-gray-900 opacity-40 z-20 rounded-full p-2 text-center align-items-center"><Icon name="ic:baseline-menu" class="text-white text-thin mt-0 text-2xl z-30" /></button></div></div>
          </div>
        </div>
      </div></div>
      <div>
        <div class="bg-white py-10 sm:py-112">
            <div class="mx-auto max-w-7xl px-6 lg:px-8" >
              <h1 class="text-center text-7xl outline-4 font-semibold leading-8 " style="animation-timing-function: ease-in-out;  animation: mymove 5s infinite;"><span class="font-bold">i</span><span class="outline-4 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">nput</span><Icon name="fluent:text-asterisk-20-regular" class="m-3 text-lime-400" /><span class="font-bold">o</span><span class="outline-4 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">utput<Icon name="fluent:text-asterisk-20-regular" class="m-3 text-lime-400" /></span><span class="font-bold">cod</span><span class="outline-4 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">e</span><Icon name="fluent:text-asterisk-20-regular" class="m-3 text-lime-400" /></h1>
            </div>
          </div>
        
      </div>
    <!-- ------------------------about-------------------------->
    <div> <div class="overflow-hidden bg-orange-100 py-24 sm:py-32 p-4">
      <h2 class="mt-2 text-5xl font-bold tracking-tight text-gray-950 sm:text-4xl mb-2 p-8">Highly talented and creative programmers with exelent problem solving skills help you tackle all the complex issues in your digital journey</h2>
        <div class="mx-auto max-w-7xl px-6 lg:px-8 bg-orange-200">
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="lg:ml-auto lg:pl-4 lg:pt-4">
              <div class="lg:max-w-lg">
                
                <div class="text-gray-950 text-6xl font-bold">100+</div>
                <div class="ml-2 text-lg font-semibold  border-b border-gray-950 p-2">happy clients</div>
                <div class="text-gray-950 text-6xl font-bold">500+</div>
                <div class="ml-2 text-lg font-semibold  border-b border-gray-950 p-2">successfull project deliveries</div>
                <div class="text-gray-950 text-6xl font-bold">35+</div>
                <div class="ml-2 text-lg font-semibold  border-b border-gray-950 p-2">awards</div>
                <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">In serach of software development company that stands out from the rest?<span class="text-lime-500">choose us</span></h2>
               
              </div>
            </div>
            <div class="flex items-start justify-end lg:order-first">
              <img src="~/assets/images/screeningtest2.jpg" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" width="2432" height="1442" />
            </div>
          </div>
        </div>
      </div></div>

    
    <div class="calculator bg-dark">
         <div
        class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:px-16"
      ><h5 class="text-lime-400 font-thin">get an estimate</h5>
        <h2
          class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-7xl text-blue-800"
        >
          try your cost calculator
        </h2>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <button
            class="btn rounded-full  bg-blue-800 px-3.5 py-2.5 text-7xl font-semibold text-white shadow-sm"
          >
            Get started
          </button>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fill-opacity="0.7"
          />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </div></div>

    <div class="pillerWrapper">
        <div class="bg-white py-14 sm:py-20">
            <div class="mx-auto max-w-7xl px-6 lg:px-8" >
              <h1 class="text-center text-7xl outline-4 font-bold leading-8 " >our five piller approach</h1></div>
          </div>
      </div>

    <!-- ------------------------List-------------------------->
    <div class="servicesWrapper bg-gray-950 p-4">
        <div class="p-4">
            <div class="p-4">
                <h2 class="text-yellow-400 font-semibold">what we do</h2>
            </div>
            <div role="list" class="divide-y divide-gray-400">
              <div v-for="service in services" :key="service.title" class="flex justify-item-start gap-x-4 py-5 p-2">
                <div class="flex gap-x-2">
                  <div class="min-w-0 flex-auto">
                    <h6 class="text-3xl font-semibold text-white" @mouseenter="hide">{{ service.title }}</h6>
                    <div class="mt-1 shrink-0  truncate text-lg leading-5 text-white">{{ service.description }}</div>
                    
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <!-- --------------------------testimonials--------------------------- -->
      <div class="TestimonialWrapper overflow-hidden bg-white py-24 sm:py-32">
        <h2 class="text-center text-thin text-gray-950 text-5xl mb-5 text-capitalize">testimonials <Icon name="noto:thought-balloon" class="text-gray-950 text-5xl" /></h2>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="lg:ml-auto lg:pl-4 lg:pt-4">
              <div class="lg:max-w-lg">
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kelvin Harrigton <span class="text-gray-400 font d=semibold">about IOCOD</span></p>
                <p class="mt-6 text-sm  text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in est nec quam consectetur vehicula. Vestibulum lacus justo, mollis in lobortis ac, pulvinar efficitur elit. Maecenas aliquet eget urna nec sagittis. Fusce volutpat sed dolor nec fringilla. Aenean vitae leo fringilla, aliquet ex eu, vestibulum magna. Donec eleifend volutpat sapien vitae tristique. Maecenas et tincidunt lectus.

                  Aenean vitae tristique mauris. Proin elementum quam tincidunt dignissim semper. Nam mattis molestie viverra. Quisque vel magna eu sem vestibulum tempus. Duis sit amet lorem quis risus feugiat posuere. Sed quis felis malesuada, molestie ex vel, commodo urna. In consectetur risus vel urna tempus, sed lacinia libero lobortis. Fusce et urna sed eros tincidunt ullamcorper a sed turpis.</p>
              </div>
            </div>
            <div class="flex items-start justify-end lg:order-first">
              <img src="~/assets/images/screeningtest2.jpg" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" width="2432" height="1442" />
            </div>
          </div>
        </div>
      </div>

      <!--------------------review section------------------->
      <div class="reviewSection p-5">
       <carousel :options="reviews"/>
      </div>

      <div class="container">
        <div class="bg-white py-14 sm:py-20">
            <div class="mx-auto max-w-7xl px-6 lg:px-8" >
              <h1 class="text-center text-5xl outline-4 font-semibold leading-8 " style="animation-timing-function: ease-in-out;  animation: mymove 5s infinite;"><span class="outline-4 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">no one understands</span> <span class="font-bold">fintech</span> <span class="outline-4 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">better than us</span> </h1>
            </div>
          </div>
        
      </div>
      
      <div class="illustratorwrapper">
        <div class="bg-gray-950 p-4">
            <div class="head p-4"><h6 class="text-7xl text-white">your idea deserves a design process that takes it from <span class="text-indigo-600">good</span> to <span class="text-yellow-400">great!</span></h6></div>
            <div class="m-auto text-center">
                <img class="text-center m-auto
                " src="https://i.ibb.co/V9nY70m/illustrator.png" alt="illustrator" border="0">
            </div>
            <div><h5 class="text-5xl text-white text-center">Are you ready to go? <button class="btb rounded-full p-2  px-3 text-sm text-white bg-indigo-700 ml-2 capitalize">let's talk<Icon class="text-2xl ml-2" name="openmoji:waving-hand" />
            </button></h5></div>
        </div>
      </div>
      <!-- ------------------------footer-------------------------->
      <div class="footer w-full"><Footer /></div>




</div>
</template>
<script setup>
const { reviews,services } =useData()

</script>
<style scoped>
.affix-container {
  text-align: center;
  height: 100%;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
}
      </style>