<template>
    <form class="form w-100" @submit.prevent="registerUser">
        <div class="card">
            <div class="card-body">
                <div class="form-group">
                    <label>Email address:</label>
                    <input type="email" class="form-control form-control-solid" placeholder="Enter email" required/>
                </div>
                <div class="form-group">
                    <label>Password:</label>
                    <input type="password" class="form-control form-control-solid" placeholder="Enter password" required/>
                </div>
            </div>
            <div class="card-footer">
                <button type="reset" class="btn btn-primary mr-2">Submit</button>
            </div>
        </div>
</form>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const email = ref('');
const password = ref('');


async function registerUser() {

if (!email.value || !password.value) return;

fetch(`https://reqres.in/api/login`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: email.value.trim(),
        password: password.value.trim(),
    })
})
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem("SignedInToken", JSON.stringify(data.token));

    })
}


</script>