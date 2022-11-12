<template>
    <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
        <p>written by {{ post.author.name }}</p>
        <NuxtLink to="/posts">Go back</NuxtLink>

    </div>
</template>

<script setup>
const route = useRoute()
console.log(route.params.id);
const { data: post } = await useFetch('/api/posts/' + route.params.id)
// console.log(post);
</script>
