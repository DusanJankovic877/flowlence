<template>
    <div class="comment">
        <h5>Dodatni komentar:</h5>
        <div class="form-group">
            <textarea v-model="comment" class="form-control" id="exampleFormControlTextarea1" rows="3" 
            :placeholder=" hideNew ? 'Ovde možete opisati ukratko Vašu delatnost kojom planirate da se bavite, dati dodatne informacije koje smatrate da su bitne ili postaviti pitanje' : 'Ovde možete opisati ukratko Vašu delatnost kojom se bavite, dati dodatne informacije koje smatrate da su bitne ili postaviti pitanje:'"
            ></textarea>
        </div>
    </div> <!--end of form-comment --> 
</template>
<script>
export default {
    props: {
        hideNew:Boolean,
        comment: String
    },
}
</script>