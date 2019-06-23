<template>
  <div id="products">
    <router-view></router-view>
    <div class="container"
      v-if="$route.name === 'SpProducts'">
      <div class="categories" v-for="category in categories" :key="category.id">
        <h1>{{ category.title }}</h1>
        <div class="product-list row">
          <div class="col-lg-4 col-sm-6 col-xs-12" v-for="subCategory in category.subCategories"
            :key="subCategory.id">
            <router-link :to="{ name: 'SpBrowseProducts', params: { category: 
              formatToUrl(category.title), subCategory: subCategory.subCategoryName }}">
              <div class="box box-item">
                <div class="row">
                  <div class="col-xs-7 col-xs-offset-5">
                    <p>{{ subCategory.subCategoryName }}</p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="row center-xs">
          <router-link :to="{ name: 'SpBrowseProducts', params: { category: 
            formatToUrl(category.title)}}">
            <uic-button primary
              value="See all">
            </uic-button>
          </router-link>
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
    data () {
      return products
    },
    mixins: [formatToUrl],
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
      color: white;
    }
    > div {
      color: white;
      margin-bottom: $lg;
      padding: 0 12px;
      .box {
        background: $gray-darker url('~@/assets/images/gear-icon-01.svg') no-repeat
          left 32px top 32px;
        min-height: 224px;
        padding: $md * 2;
        &:hover {
          background-color: lighten($gray-darker, 4%);
          cursor: pointer;
        }
      }
    }
  }
</style>
