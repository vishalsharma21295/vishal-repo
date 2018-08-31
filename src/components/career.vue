<template>
    <div id="blog">
        This is a Career page!!
        <h1 v-text="justpass"></h1>
      
        <blog></blog>
    </div>
</template>
<script>
    import blog from '@/components/about'
    export default ({
        name:'career',
        components: {
            blog
        },
        props:['justpass','msg']
    })
</script>
<style>
    #blog {
        margin-top:20px;
    }
</style>