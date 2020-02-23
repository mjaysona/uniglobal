<template>
  <div id="browseProducts">
    <div class="container">
      <div class="row between-xs">
        <div class="col-xs-3">
          <div
            v-for="category in categories"
            :key="category.id"
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
        <div class="col-xs-8">
          <uic-input
            id="searchProducts"
            v-model="productName"
            label="Search"
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

        return productList.filter(product => {
          return product.productName.toUpperCase().match(this.productName.toUpperCase())
        }).map((product) => ({ name: product.productName,
          image: product.productImage }));
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
</style>
