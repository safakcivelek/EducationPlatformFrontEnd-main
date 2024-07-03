import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Link from 'next/link';

const PrivacyPolicyMain = () => {
  return (
    <>
      <Breadcrumb title='Privacy & Policy ' subTitle='Privacy & Policy ' />
      <section className="terms_conditions_section section_space_lg pt-120 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ul
                className="nav tabs_nav_boxed unordered_list_block mb-60"
                role="tablist"
              >
                <li role="presentation">
                  <button
                    className="active"
                    data-bs-toggle="tab"
                    data-bs-target="#tab_privacy_policy"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    <i className="fas fa-circle"></i>
                    <span>Policy & Privacy</span>
                  </button>
                </li>
                <li role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target="#tab_terms_conditions"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    <i className="fas fa-circle"></i>
                    <span>Terms & Conditions</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="tab-content mb-60">
                <div
                  className="tab-pane fade show active"
                  id="tab_privacy_policy"
                  role="tabpanel"
                >
                  <div className="terms_conditions_content">
                    <h3 className="warpper_title">Privacy Policy Agreement</h3>
                    <p>
                      Companies or websites that handle customer information are
                      required by law and third parties to publish their Privacy
                      Policies on their business websites. If you own a website,
                      web app, mobile app or{" "}

                      that collects or processes user data, you most certainly
                      will have to post a Privacy Policy on your website (or
                      give in-app access to the full Privacy Policy agreement).
                    </p>
                    <h4 className="info_title">
                      Here are some of the main reasons:
                    </h4>
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>1. Responsive Design</strong>: Ensures a
                          seamless experience across various devices.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>2. User-Friendly Interface</strong>: Easy
                          navigation for educators and students.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>3. Course Management</strong>: Efficient
                          creation and organization of course content.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>4. Interactive Learning</strong>: Engaging
                          features like forums, quizzes, and assignments.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>5. Modern Technologies</strong>: Benefits of
                          React, Next.js, and TypeScript..
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          {`Let's`} take a look at each of these reasons in more
                          depth.
                        </span>
                      </li>
                    </ul>

                    <h4 className="info_title">What we collect</h4>
                    <p>
                      As a provider of the
                      {` "Eduman - Education And Online
                      Courses Template,"`}{" "}
                      you may collect and{" "}
                      <Link className="link" href="/faq">
                        Google require website
                      </Link>{" "}
                      certain information from users who interact with your
                      platform. The specific types of information you collect
                      can vary based on the features and functionalities of your
                      template. However, here are some common types of
                      information that might be collected:
                    </p>
                    <p>
                      Some of the most popular third party services require
                      website and app owners to post Privacy Policy agreements
                      on their websites. Some of these services include:
                    </p>

                    <h4 className="info_title">
                      Questions, comments, or report of incidents
                    </h4>
                    <p className="mb-1">
                      You may direct questions, comments or reports to:
                    </p>
                    <p>
                      <Link
                        className="author_mail"
                        href="mailto:howdy@paradox.com"
                      >
                        howdy@eduman.com
                      </Link>
                    </p>
                    <h4 className="info_title">
                      Revisions to this privacy policy without notice
                    </h4>
                    <p className="mb-0">
                      This Privacy Policy is dynamic. It will continually
                      change. You may not assume that it remains the same and
                      you agree to check the policy each time you visit the site
                      for changes. Unless, in the sole opinion of the website,
                      this policy changes so drastically as to suggest a posted
                      notification on the site or via email, you will receive no
                      notification of changes to this Privacy Policy nor, under
                      any circumstances, does this site promise notification.
                      Your continued use of this site always evidences your
                      acceptance of the terms this Privacy Policy or any
                      modifications.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab_terms_conditions"
                  role="tabpanel"
                >
                  <div className="terms_conditions_content">
                    <h3 className="warpper_title">
                      Terms and Conditions Agreement
                    </h3>
                    <p>
                      A terms and conditions agreement outlines the website
                      administrator’s rules regarding user behaviour and
                      provides information about the actions the website
                      administrator can and will perform. Essentially, your
                      terms and conditions text is a{" "}
                      <Link className="link" href="/contact">
                        contract between your website and its users
                      </Link>
                      . In the event of a legal dispute, arbitrators will look
                      at it to determine whether each party acted within their
                      rights.
                    </p>
                    <p>
                      Condition is not a new concept. Humans have always desired
                      privacy in their social as well as private lives. But the
                      idea of privacy as a human right is a relatively modern
                      phenomenon.
                    </p>
                    <h4 className="info_title">
                      Here are some of the main reasons:
                    </h4>
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>Abusive users</strong>: Terms and Conditions
                          agreements allow you to establish what constitutes
                          appropriate activity on your site or app, empowering you
                          to remove abusive users and content
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>Intellectual property theft</strong>: Asserting
                          your claim to the creative assets of your site in your
                          terms and conditions will prevent ownership disputes and
                          copyright infringement.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>Potential litigation:</strong> If a user lodges
                          a legal complaint against your business, showing that
                          they were presented with clear terms and conditions
                          before they used your site will help you immensely in
                          court.
                        </span>
                      </li>
                    </ul>
                    <h4 className="info_title">To Set Liabilities Limits</h4>
                    <p>
                      Almost every terms and conditions agreement has a warranty
                      or limitations of liability disclaimer. We’ll cover it in
                      more detail in our section about{" "}
                      <Link className="link" href="/policy-privacy">
                        what clauses to include in your terms and conditions
                      </Link>
                      , but this clause essentially limits what customers can
                      hold you liable for.
                    </p>

                    <h4 className="info_title">
                      Most companies restrict liability for:
                    </h4>
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <span className="list_item_text">
                          1. Inaccuracies and errors
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          2. Lack of enjoyment
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          3. Product or website downtime
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          4. Viruses, spyware, and product damage
                        </span>
                      </li>
                    </ul>

                    <h4 className="info_title">
                      To Outline Policies and Avoid Abusive Behavior
                    </h4>
                    <p className="mb-1">
                      You may direct questions, comments or reports to:
                    </p>
                    <p>
                      <Link
                        className="author_mail"
                        href="mailto:howdy@paradox.com"
                      >
                        howdy@eduman.com
                      </Link>
                    </p>
                    <h4 className="info_title">
                      Revisions to this Teams & Condition without Notice
                    </h4>
                    <p className="mb-0">
                      This Privacy Policy is dynamic. It will continually
                      change. You may not assume that it remains the same and
                      you agree to check the policy each time you visit the site
                      for changes. Unless, in the sole opinion of the website,
                      this policy changes so drastically as to suggest a posted
                      notification on the site or via email, you will receive no
                      notification of changes to this Privacy Policy nor, under
                      any circumstances, does this site promise notification.
                      Your continued use of this site always evidences your
                      acceptance of the terms this Privacy Policy or any
                      modifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyMain;