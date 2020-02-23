<template>
  <div id="products">
    <router-view />
    <div
      v-if="$route.name === 'SpProducts'"
      class="container"
    >
      <div
        v-for="category in categories"
        :key="category.id"
        class="categories"
      >
        <h2>{{ category.title }}</h2>
        <div class="product-list row">
          <div
            v-for="subCategory in category.subCategories"
            :key="subCategory.id"
            class="col-lg-3 col-sm-4 col-xs-6"
          >
            <router-link
              :to="{
                name: 'SpBrowseProducts',
                params: {
                  category: formatToUrl(category.title),
                  subCategory: subCategory.subCategoryName,
                },
              }"
            >
              <div class="box box-item">
                <div class="row">
                  <div class="col-xs-8 col-xs-offset-4">
                    <p>{{ subCategory.subCategoryName }}</p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-lg-3 col-sm-4 col-xs-6">
            <router-link
              :to="{
                name: 'SpBrowseProducts',
                params: {
                  category: formatToUrl(category.title),
                },
              }"
            >
              <div class="box box-item">
                See all
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import products from '../static/products.json';
  import formatToUrl from '../mixins/formatToUrl';

  export default {
    name: 'SpProducts',
    mixins: [formatToUrl],
    data () {
      return products
    },
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  .categories {
    margin-bottom: $lg * 2;
    h1 {
      margin-bottom: $lg;
      text-align: center;
    }
  }

  .product-list {
    margin: 0 -12px;
    a {
      color: $gray-darkest;
      &:hover {
        text-decoration: none;
      }
    }
    > div {
      margin-bottom: $lg;
      padding: 0 12px;
      .box {
        border: $gray-lighter 1px solid;
        min-height: 96px;
        padding: $xs * 2;
        &:hover {
          cursor: pointer;
        }
        p {
          margin-bottom: 0;
        }
      }
      &:last-of-type {
        a {
          color: white;
        }
        .box {
          align-items: center;
          background: $primary-color;
          border: none;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
</style>
