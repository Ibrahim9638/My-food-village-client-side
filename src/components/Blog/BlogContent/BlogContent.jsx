import React from "react";
import { Accordion, Container } from "react-bootstrap";

const BlogContent = () => {
  return (
    <div>
      <h2 className="text-center mt-4 mb-"> Blog Section</h2>
      <p className="text-center fw-bold fs-4">Answer to the All Question</p>
      <div className="container mb-5">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <b className="fs-5">
                1. The differences between controlled and uncontrolled components.
                
              </b>
            </Accordion.Header>
            <Accordion.Body>
              <b>Controlled Components:</b> Managed by React state and Parent
              component updates state on user interaction. Data flows from
              parent component to component, Easier to debug and Generally
              faster as there are less state management, Less complex code also
              considered a best practice.
              <br />
              <b>Uncontrolled Components: </b> Managed by components own
              internal state and component updates own internal state on user
              interaction. Data flows within the component, More difficult to
              debug and generally slower as there are more state management,
              More complex code, also considered an alternate approach.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {" "}
              <b className="fs-5">
                2. How to validate React props using PropTypes? 
              </b>{" "}
            </Accordion.Header>
            <Accordion.Body>
              Props and PropTypes are important mechanisms for passing read-only
              attributes between React components. We can use React props, short
              for properties, to send data from one component to another. If a
              component receives the wrong type of props, it can cause bugs and
              unexpected errors in your app. Since JavaScript doesn’t have a
              built-in type checking solution, many developers use extensions
              like TypeScript and Flow. However, React has an internal mechanism
              for props validation called PropTypes. In this article, we’ll
              learn how to validate props with React PropTypes.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              {" "}
              <b className="fs-5">
                3. The difference between Nodejs and Express js. 
              </b>{" "}
            </Accordion.Header>
            <Accordion.Body>
              <b>Node Js: </b> Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and its not a programming language. Most of the people are confused and understand its a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. Its used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on. 
              <br />
              <b>Express Js: </b> Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your applications functionality with middle ware and routing. It adds helpful utilities to Node.jss HTTP objects. It facilitates the rendering of dynamic HTTP objects 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              {" "}
              <b className="fs-5">
                4. What is a custom hook, and why will you create a custom hook? 
              </b>{" "}
            </Accordion.Header>
            <Accordion.Body>
            Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default BlogContent;
