<template>
  <div id="browseProducts">
    <div class="container">
      <div class="row between-xs">
        <div class="product-navigation col-sm-3 col-xs-12">
          <div
            v-for="category in categories"
            :key="category.id"
            :class="{ 'active' : category.title === 
              formatTitle($route.params.category) }"
            class="categories"
          >
            <h4 class="labeled-icon">
              <router-link
                :to="{ name: 'SpBrowseProducts', params: { category: 
                  formatToUrl(category.title)}}"
              >
                <span @click="updateSearch('')">
                  {{ category.title }}
                </span>
              </router-link>
            </h4>
            <ul>
              <li
                v-for="subCategory in category.subCategories" 
                :key="subCategory.id"
                :class="{ 'active' : subCategory.subCategoryName === 
                  productSubCategory }"
                :hidden="category.title !==
                  formatTitle($route.params.category)"
              >
                <span @click="updateSearch(subCategory.subCategoryName)">
                  {{ subCategory.subCategoryName }}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="product-list col-sm-8 col-xs-12">
          <uic-input
            id="searchProducts"
            ref="searchInput"
            v-model="productName"
            label="Search product"
            type="text"
          />
          <p :html="renderInfo" />
          <tp-list :items="filteredProducts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import products from '../static/products.json';
  import formatToUrl from '../mixins/formatToUrl';

  export default {
    name: 'SpBrowseProducts',
    mixins: [formatToUrl],
    data () {
      return {
        productName: '',
        productSubCategory: '',
        ...products,
      }
    },
    computed: {
      filteredCategories () {
        return this.categories.filter((category) => {
          return category.title.match(this.formatTitle
            (this.$route.params.category));
        });
      },
      filteredProducts () {
        const category = products.categories.filter(category => {
          return category.title.match(this.formatTitle
            (this.$route.params.category));
        })[0].subCategories.filter(subCategory => 
          subCategory.subCategoryName.toUpperCase()
          .match(this.productSubCategory.toUpperCase()))
        
        const productList = category.reduce((acc, subCategory) => {
          return acc.concat(subCategory['productList'] || []);
        }, []);

        return productList
          .filter((product) => {
            return product.productName.toUpperCase().match(this.productName.toUpperCase())
             || (
               product.tags && product.tags.join(' ').toUpperCase()
                .match(this.productName.toUpperCase())
             )
          })
          .map((product) => ({
            tags: product.tags,
            name: product.productName,
            image: product.productImage,
          }));


      },
      renderInfo() {
        switch(this.$route.params.category) {
          case 'amc':
            return `
              <p>
                For more information, visit the AMC Website:
                <a href="#" target="_blank">https://www.amcmud.com</a>.
              </p>
            `;
          case 'reflex':
            return `
              <p>
                Download the comprehensive list of REFLEX instruments
                <a href="#" target="_blank">here</a>.
              </p>
              <p>
                For further information about REFLEX technologies and solutions visit:
                <a href="#" target="_blank">http://reflexnow.com</a>.
              </p>
            `;
          default:
            return '';
        }
      },
    },
    watch: {
      $route (to, from) {
        this.productName = '';
        this.productSubCategory = '';
      },
    },
    created () {
      if (this.$route.params.subCategory) {
        this.productSubCategory = this.$route.params.subCategory;
      }
    },
    methods: {
      formatTitle (routeName) {
        switch(routeName) {
          case 'exploration':
            return 'Exploration';
          case 'mining-and-production':
            return 'Mining and Production';
          case 'amc':
            return 'AMC';
          case 'reflex':
            return 'Reflex';
          case 'corewise':
            return 'Corewise';
          case 'discoverer':
            return 'Discoverer';
          default:
            break;
        }
      },
      updateSearch(value) {
        this.productSubCategory = value;

        this.$refs.searchInput.$el.focus();
      },
    },
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  h4 {
    cursor: pointer;
    a:hover {
      text-decoration: none;
    }
  }

  #searchProducts {
    margin-bottom: $md;
  }

  .list-block {
    margin-bottom: $md;
  }

  ul {
    display: block;
    margin-bottom: $lg;
    li {
      line-height: $p * 1.64;
      margin-bottom: $xs;
      &.active span {
        color: $primary-color;
        &:hover {
          color: $primary-color;
        }
      }
      span {
        color: $gray-dark;
        cursor: pointer;
        &:hover {
          color: $gray-darkest;
        }
      }
    }
  }

  @media only screen and (max-width: 48em) {
    .product-navigation {
      display: flex;
      flex-basis: calc(100% + #{$md});
      flex-wrap: wrap;
      margin: 0 (-$xs) $md;
      max-width: calc(100% + #{$md});
      text-align: center;
      .categories {
        flex-basis: calc(33.33% - #{$md});
        border: $gray-lighter 1px solid;
        border-radius: $xs / 4;
        box-sizing: border-box;
        cursor: default;
        line-height: $p * 1.64;
        margin: 0 $xs $md;
        display: block;
        &.active {
          background: $primary-color;
          border: none;
          a, a:focus, a:visited {
            color: white;
          }
        }
        h4 span {
          padding: $xs;
        }
        h4, h4 span {
          @include p($p);
          box-sizing: border-box;
          display: block;
          height: 100%;
          margin: 0;
        }
        ul {
          display: none;
        }
        .labeled-icon {
          display: block;
        }
      }
    }
  }

  @media only screen and (max-width: 32em) {
    .product-navigation .categories {
      flex-basis: calc(50% - #{$md});
    }
  }
</style>
