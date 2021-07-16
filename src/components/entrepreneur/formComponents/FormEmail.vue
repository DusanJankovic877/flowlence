<template>
    <div class="email">
        <h5>Vaša mail adresa na koju želite da Vam pošaljemo ponudu: <span class="red"> *</span></h5>
        <div class="form-group">
            <label for="email">Email adresa: </label>
            <input type="email" v-model="email" name="email" class="form-control" id="email" placeholder="name@example.com">
        </div>

    </div> <!--end of form-email --> 
</template>
<script>
export default {
    props: {
        email: String
    },
}
</script>