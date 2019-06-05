import Link from "next/link";

export default function SignIn() {
  return (
    <section class="fdb-block py-0">
      <div
        class="container py-5 my-5"
        // style="background-image: url(imgs/shapes/6.svg);"
      >
        <div class="row">
          <div class="col-12 col-md-8 col-lg-7 col-xl-5 text-left">
            <div class="row">
              <div class="col">
                <h1 className="font-weight-bold">Sign In</h1>
                <p class="lead">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.{" "}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col mt-4">
                <input type="text" class="form-control" placeholder="Email" />
              </div>
            </div>
            <div class="row mt-4">
              <div class="col">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="mt-2 d-flex">
              <a className="" href="#">
                forgot your password?
              </a>
            </div>
            <div class="row mt-4">
              <div class="col">
                <button class="btn btn-danger" type="button">
                  <span className="font-weight-bold">Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
