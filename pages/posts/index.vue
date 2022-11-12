<template>
    <div>
        <h1>Blog Posts</h1>
        <div class="posts">
            <div v-for="post in posts" :key="post.id">
                <router-link :to="'/posts/' + post.id">{{ post.title }}</router-link>
            </div>
        </div>
        <form @submit.prevent="save">
            <label>Title</label>
            <input type="text" v-model="title">
            <input type="text" v-model="content">
            <button type="submit">Save</button>

        </form>
    </div>
</template>

<script setup>

const title = ref('')
const content = ref('')
const { data: posts } = await useFetch('/api/posts')
// console.log(posts);

const save = () => {
    if (title && content) {
        const { data: result } = useFetch('/api/posts/create', {
            method: 'POST',
            body: JSON.stringify({
                title: title.value,
                content: content.value
            })
        })
        console.log(result);
    }
}
</script>
