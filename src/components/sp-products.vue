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
              <div
                class="box box-item"
                :style="productImage(subCategory.subCategoryImage)"
              >
                <p>{{ subCategory.subCategoryName }}</p>
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
    methods: {
      productImage(name) {
        return name 
          ? `background-image: url('${require(`@/assets/images/${name}`)}')`
          : `background-image: url('${require(`@/assets/images/globe-01.svg`)}')`;
      },
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
      color: $gray-darker;
      &:hover {
        text-decoration: none;
      }
    }
    > div {
      margin-bottom: $lg;
      padding: 0 12px;
      .box {
        background-color: $gray-darkest;
        background-size: cover;
        border: $gray-lighter 1px solid;
        color: white;
        min-height: 96px;
        padding: $xs * 2;
        text-align: center;
        &:hover {
          cursor: pointer;
        }
        p {
          margin-bottom: 0;
          text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.64), 0px 2px 8px rgba(0, 0, 0, 0.4);
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
