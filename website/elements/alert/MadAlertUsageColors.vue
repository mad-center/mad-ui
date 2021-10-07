<template>
  <!-- color variants-->
  <mad-alert
    :type="'info'"
    :content="'Provide information that is neutral'"
  ></mad-alert>
  <mad-alert
    :type="'success'"
    :content="'Provide information that is positive and encouraged'"
  ></mad-alert>
  <mad-alert
    :type="'warning'"
    :content="'Provide information that users should be aware of as there is a low to moderate'"
  ></mad-alert>
  <mad-alert
    :type="'danger'"
    :content="'Provide information that is negative and has a high risk to the user'"
  ></mad-alert>
</template>
