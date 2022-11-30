<template>
    <div>
        <NuxtLink to="/posts">go blog</NuxtLink>
        <div>
            <button @click="signIn(undefined, { callbackUrl: '/' })">
                sign in
            </button>
            <br>
            <button @click="signIn('github', { callbackUrl: '/' })">
                sign in (github)
            </button>
            <br>
            <button @click="signIn('credentials', { username: 'jsmith', password: 'hunter2' })">
                Username and Password
            </button>
            <br>
            <button @click="signOut">
                sign out
            </button>
        </div>
    </div>
</template>

<script setup>
const {
    status,
    data,
    getSession,
    signIn,
    signOut,
} = await useSession({
    // Whether a session is required. If it is, a redirect to the signin page will happen if no active session exists
    required: false
})

// Session status: `unauthenticated`, `loading`, `authenticated`
// status.value
console.log(status.value);

console.log(data.value);
</script>
