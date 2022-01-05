<template>
  <div>
    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header"
        style="min-height: 200px; background-size: cover; background-position: center top;">
      <b-container fluid>
        <span class="mask bg-gradient-success opacity-8"></span>
      </b-container>
    </div>

    <b-container fluid class="mt--6">
      <b-row>
        <b-col xl="8" class="order-xl-1">
          <edit-profile-form></edit-profile-form>
        </b-col>
        <b-col xl="4" class="order-xl-2 mb-5">
          <user-card></user-card>
        </b-col>
        <b-col xl="4" class="order-xl-2 mb-5">
          <result></result>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>
<script>
  import EditProfileForm from './Prediction/PredictForm.vue';
  import UserCard from './Prediction/Loading.vue';
  import Result from './Prediction/Result.vue';

  export default {
    components: {
      EditProfileForm,
      UserCard,
      Result
    }
  };
</script>
<style>
</style>
