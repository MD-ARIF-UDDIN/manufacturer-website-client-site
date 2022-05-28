import React from "react";

const Blogs = () => {
  return (
    <div className="mt-12">
      <div className="mb-6">
        <h1 className="text-primary font-bold text-4xl text-center">
          Questions and Answer
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              How will you improve the performance of a React Application?
            </h2>
            <p>
              I can improve the performance of a react app by implementing
              throttling and debouncing with lodash, underscore or RxJs When
              building an app using React.I can also Use React.Fragments to
              Avoid Additional HTML Element Wrappers. By using react hooks we
              can also improve the performance of a react app.I can aslo improve
              the performance of react app Keeping component state local where
              necessary.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p>
              whenever we change state React uses an observable object as the
              state that observes what changes are made to the state and helps
              the component behave accordingly. For example, if we update the
              state of any component like the following the webpage will not
              re-render itself because React State will not be able to detect
              the changes made
            </p>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              How does prototypical inheritance work?
            </h2>
            <p>
              Behavior and state are inherited from the parent object Prototypal
              inheritance.When the object is called it inherits the behavior and
              state. If teh parent object changes in the run time then the
              behavior and the state of the child objects will be affected by
              it.An object uses the properties or methods of another object via
              the prototype linkage in prototypical inheritance
            </p>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts
            </h2>
            <p>
              Here if we update the value of the hook like this: product =
              [...], it will produce a error because are destructuing the hook
              as const but if we use it as it is then it wont provide any error
              and set the value as we want.But there is an problem,here to re
              render the component we have to use setProducts otherwise it wont
              re render.setProducts is done by the asynchronous task.then it
              will add the new value and will replace the old value and then it
              will re-render that component.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              What is a unit test? Why should write unit tests?
            </h2>
            <p>
              Unit test is a testing method and in this testing meethod,js test
              code that are written for a web application module is combined
              with HTML as an inline event handler and executed in the browser
              to check if all the functionalities work perfectly or not.We
              should write unit tests because it allows developers to think
              through the design of the software and what to done before writing
              the code. which resulst much better reliable code and able them to
              build much more better design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
