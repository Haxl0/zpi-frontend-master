<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-warning"></base-header>

    <b-container fluid class="mt--6">
      <b-row>
        <b-col xl="12" class="order-xl-1">
          <edit-profile-form></edit-profile-form>
          <result></result>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>
<script>
  import EditProfileForm from './Prediction/PredictForm.vue';
  import Result from './Prediction/Result.vue';

  export default {
    components: {
      EditProfileForm,
      Result
    }
  };
</script>
<style>
</style>
