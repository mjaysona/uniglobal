<template>
  <div id="careers">
    <div class="container">
      <section>
        <p>
          Here at Uniglobal, our teams' successes are ours as well. Our loyalty
          extends from our brand to our employees, as we align growth and
          sustainability for everyone under our enterprise. As a
          people-oriented organization, we build on our employees’ strengths
          and expertise by investing on training and development initiatives.
        </p>
      </section>
    </div>
    <hr>
    <div class="container">
      <section>
        <div class="row between-xs">
          <div class="col-sm-6">
            <h2>What awaits you at Uniglobal?</h2>
            <div
              v-for="item in whatAwaitsYou"
              :key="item.id"
            >
              <h5>{{ item.title }}</h5>
              <p>{{ item.description }}</p>
            </div>
          </div>
          <div class="col-sm-6">
            <h2>What our team says about us?</h2>
            <div
              v-for="review in employeeReviews"
              :key="review.id"
              class="quote"
            >
              <p class="message">
                {{ review.message }}
              </p>
              <p class="author">
                <strong>— {{ review.author }}</strong>
              </p>
              <small>{{ review.position }}</small>
            </div>
          </div>
        </div>
      </section>
    </div>
    <hr>
    <div class="container">
      <section>
        <div class="row between-xs">
          <div class="col-sm-6">
            <h2>Job Opportunities</h2>
            <p>
              At Uniglobal, we provide the support our teams need to develop
              their technical skills and personal strengths. Whether you're
              interested in team management, sales, technical and product
              knowledge or customer service, we have the size and scale to best
              jumpstart your career.
            </p>
            <p>
              We are looking for motivated, adaptable individuals able to bring
              their expertise to the table and join our team, in a challenging
              yet rewarding career where you can excel to your fullest potential.
            </p>
            <p>
              Browse our range of open positions from our careers list below:
            </p>
            <ul class="position-list row">
              <li
                v-for="job in jobs"
                :key="job.id"
                class="col-sm-6"
              >
                <p><strong>{{ job.position }}</strong></p>
                <p><small>{{ job.location }}</small></p>
              </li>
            </ul>
            <p>
              Interested applicants may send their resumes to 
              <a href="#">hr@uitph.com</a>.
            </p>
          </div>
          <div class="col-sm-6">
            <h2>Internship Program</h2>
            <p>
              At Uniglobal, we offer our interns a chance to be exposed to
              real-time projects, and work on projects that matter, in a
              fast-paced environment. Whichever path they intend to take,
              we make sure their skills and insights are valued by their team,
              so they gain hands-on experience and get them ready to take on
              real-life work.
            </p>
            <p>
              Both undergraduates seeking early career insights and graduating
              students transitioning to full-time work are welcome to try on an
              assortment of functions with us, as a member of the country's
              preferred supplier of mining tools and equipment by industry
              standards.
            </p>
            <p>
              Browse our range of open positions from our internship list below:
            </p>
            <p>
              Interested applicants may send their resumes to 
              <a href="#">hr@uitph.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import careers from '../static/careers.json';

  export default {
    name: 'SpCareers',
    data () {
      return careers
    },
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  #careers {
    p {
      text-align: left;
    }
    .container {
      section {
        margin-bottom: $xlg;
        > .row {
          margin: 0 (-$xs * 3);
          > [class^="col-"] {
            padding: 0 $xs * 3;
          }
        }
        &:last-of-type {
          margin: 0;
        }
      }
    }
    .position-list {
      li {
        margin-bottom: $md;
        p {
          margin: 0;
        }
      }
    }
    .quote {
      margin-bottom: $lg;
      .author {
        margin: $xxs;
      }
      .message {
        margin: $xxs;
      }
      small {
        color: $gray-dark;
      }
    }
  }
</style>
