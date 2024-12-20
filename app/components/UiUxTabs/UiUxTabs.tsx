import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { useScrollValue } from "~/hooks/useScrollValue";
import Button from "~/components/Button/index";
import Minus from "~/icons/components/MinusIcon";
import Plus from "~/icons/components/PlusIcon";

const CompetitiveAnalysis = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">Competitive Analysis</h4>
      <p className="mb-6 ui-ux-step-description text-yw-gray-500">
        Find ways to solve usability issues
        <br />
        <br />
        Identify the product’s position in the market and market gaps that can
        be used
        <br />
        <br />
        Recognize competitors’ strengths and weaknesses
        <br />
        <br />
        Validate design decisions
      </p>

      <div className="text-yw-gray-300 ui-ux-step-description uppercase mb-4">
        Deliverables
      </div>
      <p className="ui-ux-step-description">Competitive Analysis document</p>
    </>
  );
};

const UserResearch = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">User Research</h4>
      <p className="mb-6 ui-ux-step-description text-yw-gray-500">
        This research gives insights into what users’ behavior is.
      </p>

      <div className="mb-4 text-yw-gray-300 yw-t2 uppercase">Deliverables</div>

      <div className="mb-6">
        <div className="mb-4 ui-ux-step-description !font-semibold">
          User Surveys
        </div>
        <p className="text-yw-gray-500 ui-ux-step-description">
          User surveys are used to collect the necessary data about the users.
          These surveys are used for various purposes, including accumulating
          quantitative data or validating qualitative findings.
        </p>
      </div>

      <div>
        <div className="mb-4 ui-ux-step-description !font-semibold">
          User Personas
        </div>
        <p className="ui-ux-step-description text-yw-gray-500">
          This tool provides a deeper understanding of your target audience and
          leads the idea creation process.
        </p>
      </div>
    </>
  );
};

const UxUiResearch = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">UX/UI Research</h4>
      <p className="mb-6 ui-ux-step-description text-yw-gray-500">
        This research gives an idea of how a possible interaction between the
        interface and the users will look like.
      </p>

      <div className="mb-4 text-yw-gray-300 yw-t2 uppercase">Deliverables</div>

      <div className="mb-6">
        <div className="mb-4 ui-ux-step-description !font-semibold">
          User Story / Jobs-to-be-done
        </div>
        <p className="text-yw-gray-500 ui-ux-step-description">
          A brief scenario describing what users want to achieve by using the
          product.
        </p>
      </div>

      <div className="mb-6">
        <div className="mb-4 ui-ux-step-description !font-semibold">
          Use Case
        </div>
        <p className="ui-ux-step-description text-yw-gray-500">
          It involves defining a clear sequence of actions that users should
          take to accomplish a task manually.
        </p>
      </div>

      <div className="mb-6">
        <div className="mb-4 ui-ux-step-description !font-semibold">
          Experience Map
        </div>
        <p className="ui-ux-step-description text-yw-gray-500">
          This map helps shareholders better understand strategic goals, user
          pain points, and optimize conversion funnels.
        </p>
      </div>

      <div className="mb-6">
        <div className="mb-4 ui-ux-step-description !font-semibold">
          Storyboards
        </div>
        <p className="ui-ux-step-description text-yw-gray-500">
          This is a sequence of images in chronological order that illustrate
          the user story.
        </p>
      </div>

      <div>
        <div className="mb-4 ui-ux-step-description !font-semibold">
          User Scenarios
        </div>
        <p className="ui-ux-step-description text-yw-gray-500">
          This is a continuation of the user story. It involves a fictional
          story describing how the user completes a certain goal by interacting
          with a product.
        </p>
      </div>
    </>
  );
};

const BusinessObjectives = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">Business Objectives</h4>
      <p className="mb-6 ui-ux-step-description text-yw-gray-500">
        At this stage, business goals, the framework for generating financial
        income, and possible outcomes of the UX audit are defined.
      </p>
      <div className="grid grid-cols-6 gap-y-7 sm:gap-7 mb-10 sm:mb-0">
        <div className="col-span-6 sm:col-span-2">
          <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase">
            Actions
          </div>
          <p className="ui-ux-step-description">Stakeholder interview</p>
        </div>

        <div className="col-span-6 sm:col-span-4">
          <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase">
            Deliverables
          </div>
          <p className="ui-ux-step-description">
            A document with the descriptions of requirements and business goals
          </p>
        </div>
      </div>
    </>
  );
};

const AnalyticsOverview = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">Analytics Overview</h4>
      <p className="mb-6 ui-ux-step-description text-yw-gray-500">
        After determining the business goals, we analyze if they live up to your
        expectations and how things are going in reality. We analyze data to
        assess the progress of your product.
      </p>
      <div className="grid grid-cols-6 gap-y-7 mb-10 sm:mb-0">
        <div className="col-span-6 sm:col-span-2">
          <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase">
            Actions
          </div>
          <p className="ui-ux-step-description mb-6">Google Analytics</p>
          <p className="ui-ux-step-description mb-6">Hotjar</p>
          <p className="ui-ux-step-description">UX Cam</p>
        </div>

        <div className="col-span-6 sm:col-span-4">
          <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase">
            Data
          </div>
          <ul className="list-disc">
            <li className="mb-4 ml-6 ui-ux-step-description">
              User demographics
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Conversion metrics
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">Sales data</li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Traffic flow and engagement
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Customer care data
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">Heatmaps</li>
            <li className="mb-4 ml-6 ui-ux-step-description">Scrollmaps</li>
            <li className="mb-4 ml-6 ui-ux-step-description">Form analytics</li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Poll/form results
            </li>
            <li className="ml-6 ui-ux-step-description">
              User testing results
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const HeuristicEvaluation = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">Heuristic Evaluation</h4>
      <p className="mb-6 ui-ux-step-description text-yw-gray-500">
        UX experts evaluate the user interface of the product to see how
        user-friendly it is and detect any usability issues.
      </p>
      <div className="grid grid-cols-6 gap-y-7 sm:gap-7">
        <div className="col-span-6 sm:col-span-2">
          <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase">
            Methodology
          </div>
          <p className="ui-ux-step-description">
            Jacob Nielsen’s 10 Usability Heuristics for User Interface Design
          </p>
        </div>

        <div className="col-span-6 sm:col-span-4">
          <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase">
            Criterias
          </div>
          <ol className="list-decimal mb-6">
            <li className="mb-4 ml-6 ui-ux-step-description">
              Visibility of the system status.
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Match between the system and the real world.
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              User control and freedom.
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Consistency and standards.
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Error prevention.
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Recognition rather than recall.
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Flexibility and efficiency of use.
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Aesthetic and minimalist design.
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Help users recognize, diagnose, and recover from errors.
            </li>
            <li className="ml-8 ui-ux-step-description">
              Help and documentation.
            </li>
          </ol>

          <div>
            <div className="text-yw-gray-300 mb-4 ui-ux-step-description">
              Deliverables
            </div>
            <p className="ui-ux-step-description !font-semibold mb-2">
              UX Audit Report
            </p>
            <p className="ui-ux-step-description">
              The document features all problems found, and our recommendations
              of how to fix them and improve the product.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const InformationArchitecture = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">Information Architecture</h4>
      <p className="mb-6 yw-t3 text-yw-gray-500">
        We take all the collected data from the research phase to build an
        information architecture for the product. Information architecture is
        all about organizing information in a clear and logical way.
      </p>

      <div className="grid grid-cols-6 gap-y-7 sm:gap-7">
        <div className="col-span-6 sm:col-span-2">
          <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase">
            Tools
          </div>
          <p className="ui-ux-step-description">Figma</p>
        </div>

        <div className="col-span-6 sm:col-span-4">
          <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase">
            Deliverables
          </div>
          <p className="ui-ux-step-description mb-2 !font-semibold">Mind Map</p>
          <p className="ui-ux-step-description text-yw-gray-300">
            This brainstorming tool provides a view of the system and shows the
            relationship between various parts to help users navigate through
            the information.
          </p>
        </div>
      </div>
    </>
  );
};

const UserFlow = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">User Flow</h4>
      <p className="mb-6 ui-ux-step-description text-yw-gray-500">
        User flow illustrates all the steps that should be taken in order to
        accomplish a certain task. With its help, developers get information
        about various user flows, alternate triggers, and errors. Therefore, all
        bugs are detected and fixed at the early stage of the design process.
      </p>

      <div className="grid sm:grid-cols-6 gap-y-7 sm:gap-7">
        <div className="col-span-6 sm:col-span-2">
          <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase">
            Tools
          </div>
          <p className="ui-ux-step-description mb-6">Figma</p>
          <p className="ui-ux-step-description">Overflow</p>
        </div>

        <div className="col-span-6 sm:col-span-4">
          <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase">
            Deliverables
          </div>
          <p className="ui-ux-step-description mb-2 !font-semibold">
            User Flows
          </p>
          <p className="ui-ux-step-description text-yw-gray-500">
            We provide the stakeholders with a user flow document that combines
            screen layouts with flowchart representations of user interaction in
            the system.
          </p>
        </div>
      </div>
    </>
  );
};

const LowFidelity = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">Low fidelity wireframes</h4>
      <p className="mb-6 ui-ux-step-description text-yw-gray-500">
        These wireframes act as static visual representations of the design
        layout and product features. They display the wireframe of the
        interface, user flows, and information architecture.
      </p>
      <div className="grid grid-cols-6 gap-y-7 sm:gap-7">
        <div className="col-span-6 sm:col-span-2">
          <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase">
            Tools
          </div>
          <p className="ui-ux-step-description mb-6">Paper</p>
          <p className="ui-ux-step-description mb-6">Figma</p>
          <p className="ui-ux-step-description">Overflow</p>
        </div>

        <div className="col-span-6 sm:col-span-4">
          <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase">
            Deliverables
          </div>
          <p className="ui-ux-step-description mb-2 !font-semibold">
            Low fidelity wireframes
          </p>
        </div>
      </div>
    </>
  );
};

const HighFidelity = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">High fidelity wireframes</h4>
      <p className="mb-6 ui-ux-step-description text-yw-gray-500">
        These wireframes provide more complete representations of the end
        product compared to low-fidelity wireframes. High-fidelity wireframes
        include colors, content, branding elements, and image dimensions.
      </p>
      <div className="grid sm:grid-cols-6 gap-y-7 sm:gap-7">
        <div className="col-span-6 sm:col-span-2">
          <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase">
            Tools
          </div>
          <p className="ui-ux-step-description mb-6">Figma</p>
          <p className="ui-ux-step-description">Sketch</p>
        </div>
        <div className="col-span-6 sm:col-span-4">
          <div className="text-yw-gray-300 mb-6 ui-ux-step-description uppercase">
            Deliverables
          </div>
          <p className="ui-ux-step-description mb-2 !font-semibold">
            High-Fidelity Wireframes
          </p>
        </div>
      </div>
    </>
  );
};

const InteractivePrototype = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">Heuristic Evaluation</h4>
      <p className="mb-6 ui-ux-step-description text-yw-gray-500">
        UX experts evaluate the user interface of the product to see how
        user-friendly it is and detect any usability issues.
      </p>
      <div className="grid sm:grid-cols-6 gap-y-7 sm:gap-7">
        <div className="col-span-6 sm:col-span-2">
          <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase">
            Tools
          </div>
          <p className="ui-ux-step-description mb-6">Figma</p>
          <p className="ui-ux-step-description mb-6">Sketch</p>
          <p className="ui-ux-step-description mb-6">Overflow</p>
          <p className="ui-ux-step-description">InVision</p>
        </div>

        <div className="col-span-6 sm:col-span-4">
          <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase">
            Deliverables
          </div>
          <p className="ui-ux-step-description mb-6 !font-semibold">
            Interactive Prototype
          </p>

          <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase">
            Benefits
          </div>
          <ul className="list-disc mb-6">
            <li className="mb-4 ml-6 ui-ux-step-description">
              Brings the design to life.
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Generates feedback from proper context.
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Decreases development time
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Serves as a reference tool for developers
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Validates a shared vision among users and stakeholders
            </li>
            <li className="ml-6 ui-ux-step-description">
              Tests assumptions and hypotheses
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const UsabilityTesting = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">Usability testing</h4>
      <p className="mb-6 ui-ux-step-description text-yw-gray-500">
        Usability testing is conducted for spotting weak points and identifying
        possible solutions to the detected issues.
      </p>

      <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase">
        Deliverables
      </div>
      <p className="ui-ux-step-description mb-2 !font-semibold">
        User Testing Report
      </p>
      <p className="ui-ux-step-description text-yw-gray-300">
        User testing report that encompasses data obtained and suggestions on
        design improvement.
      </p>
    </>
  );
};

const Moodboards = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">Moodboards</h4>
      <p className="mb-6 ui-ux-step-description text-yw-gray-500">
        This tool helps understand how the end product must look like and feel
        like.
      </p>

      <div className="grid grid-cols-6 gap-y-7 sm:gap-7">
        <div className="col-span-6 sm:col-span-2">
          <div className="text-yw-gray-300 mb-6 ui-ux-step-description uppercase">
            Tools
          </div>
          <p className=" ui-ux-step-description">Figma</p>
        </div>

        <div className="col-span-6 sm:col-span-4">
          <div className="text-yw-gray-300 mb-6 ui-ux-step-description uppercase">
            Deliverables
          </div>
          <p className="ui-ux-step-description mb-2 !font-semibold">
            Moodboard
          </p>
          <p className="ui-ux-step-description text-yw-gray-300">
            A compilation of various design layout ideas.
          </p>
        </div>
      </div>
    </>
  );
};

const VisualDesign = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">Visual Design</h4>
      <p className="mb-6 ui-ux-step-description text-yw-gray-500">
        A visual design is created either from scratch or based on the branding
        guidelines given by stakeholders.
      </p>

      <div className="grid grid-cols-6 gap-y-7 sm:gap-7">
        <div className="col-span-6 sm:col-span-2">
          <div className="text-yw-gray-300 mb-6 ui-ux-step-description uppercase">
            Tools
          </div>
          <p className="ui-ux-step-description mb-6">Figma</p>
          <p className="ui-ux-step-description">Sketch</p>
        </div>

        <div className="col-span-6 sm:col-span-4">
          <div className="text-yw-gray-300 mb-6 ui-ux-step-description uppercase">
            Deliverables
          </div>
          <p className="ui-ux-step-description mb-2 !font-semibold">
            Visual Design Mockups
          </p>
          <p className="ui-ux-step-description text-yw-gray-300">
            Visual design mockups that give an understanding of how the user
            interface will look like.
          </p>
        </div>
      </div>
    </>
  );
};

const UiAnimations = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">UI Animations</h4>
      <p className="mb-6 ui-ux-step-description text-yw-gray-500">
        We create short animations to show user flows, transitions, and
        interactions within the system.
      </p>

      <div className="grid grid-cols-6 gap-y-7 sm:gap-7">
        <div className="col-span-6 sm:col-span-2">
          <div className="text-yw-gray-300 mb-6 ui-ux-step-description uppercase">
            Tools
          </div>
          <p className="ui-ux-step-description mb-6">Protopie</p>
          <p className="ui-ux-step-description mb-6">Figma</p>
          <p className="ui-ux-step-description">After Effects</p>
        </div>

        <div className="col-span-6 sm:col-span-4">
          <div className="mb-6">
            <p className="ui-ux-step-description mb-2 !font-semibold">
              Style and design guidelines
            </p>
            <p className="ui-ux-step-description">
              Icons, typography, colors, spacing, and illustrations.
            </p>
          </div>
          <div className="mb-6">
            <p className="ui-ux-step-description mb-2 !font-semibold">
              UI libraries
            </p>
            <p className="ui-ux-step-description">
              Form design elements, images, navigation, and overlays.
            </p>
          </div>
          <div>
            <p className="ui-ux-step-description mb-2 !font-semibold">
              Components library{" "}
            </p>
            <p className="ui-ux-step-description">
              Reusable comрlex components.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const DesignSystem = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">Design System</h4>
      <p className="mb-6 ui-ux-step-description text-yw-gray-500">
        It includes guidelines for design and code (a set of standards for
        component operation) that enhance design consistency.
      </p>
      <div className="grid grid-cols-6 gap-y-7 sm:gap-7">
        <div className="col-span-6 sm:col-span-2">
          <div className="text-yw-gray-300 mb-6 ui-ux-step-description uppercase">
            Tools
          </div>
          <p className="ui-ux-step-description mb-6">Figma</p>
          <p className="ui-ux-step-description mb-6">Sketch</p>
          <p className="ui-ux-step-description mb-6">Jira Confluence</p>
          <p className="ui-ux-step-description mb-6">Notion</p>
          <p className="ui-ux-step-description">Storybook</p>
        </div>
        <div className="col-span-6 sm:col-span-4">
          <div className="text-yw-gray-300 mb-6 ui-ux-step-description uppercase">
            Deliverables
          </div>
          <p className="ui-ux-step-description mb-2">
            High-Fidelity Wireframes
          </p>
        </div>
      </div>
    </>
  );
};

const InteractivePrototype1 = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">Interactive Prototype</h4>
      <p className="mb-6 ui-ux-step-description text-yw-gray-500">
        An interactive prototype is a part of the visual design process that
        represents the visualization of the product in progress.
      </p>
      <div className="grid grid-cols-6 gap-y-7 sm:gap-7">
        <div className="col-span-6 sm:col-span-2">
          <div className="text-yw-gray-300 mb-6 ui-ux-step-description uppercase">
            Tools
          </div>
          <p className="ui-ux-step-description mb-6">Figma</p>
          <p className="ui-ux-step-description mb-6">Sketch</p>
          <p className="ui-ux-step-description mb-6">Overflow</p>
          <p className="ui-ux-step-description">InVision</p>
        </div>

        <div className="col-span-6 sm:col-span-4">
          <div className="text-yw-gray-300 mb-6 ui-ux-step-description uppercase">
            Deliverables
          </div>
          <p className="ui-ux-step-description mb-6 !font-semibold">
            Interactive Prototype
          </p>

          <div className="text-yw-gray-300 mb-6 ui-ux-step-description uppercase">
            Benefits
          </div>
          <ul className="list-disc mb-6">
            <li className="mb-4 ml-6 ui-ux-step-description">
              Brings the design to life.
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Generates feedback from proper context.
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Decreases development time
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Serves as a reference tool for developers
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Validates a shared vision among users and stakeholders
            </li>
            <li className="ml-6 ui-ux-step-description">
              Tests assumptions and hypotheses
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const HandoffDocuments = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">Handoff documents</h4>
      <p className="mb-6 ui-ux-step-description text-yw-gray-500">
        They are simple and accessible documents that feature various aspects of
        a design solution.
      </p>
      <div className="grid grid-cols-6 gap-y-7 sm:gap-7">
        <div className="col-span-6 sm:col-span-2">
          <div className="text-yw-gray-300 mb-6 ui-ux-step-description uppercase">
            Tools
          </div>
          <p className="ui-ux-step-description mb-6">Figma</p>
          <p className="ui-ux-step-description mb-6">Sketch</p>
          <p className="ui-ux-step-description mb-6">Zeplin</p>
          <p className="ui-ux-step-description mb-6">InVision</p>
          <p className="ui-ux-step-description">Jira Confluence</p>
        </div>

        <div className="col-span-6 sm:col-span-4">
          <div className="text-yw-gray-300 mb-6 ui-ux-step-description uppercase">
            Deliverables
          </div>
          <p className="ui-ux-step-description mb-6 !font-semibold">
            Dynamic handoff documents
          </p>
          <p className="ui-ux-step-description !font-semibold">
            Static handoff documents
          </p>
        </div>
      </div>
    </>
  );
};

const UiPolishingCorrections = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">UI Polishing & Corrections</h4>
      <p className="mb-6 ui-ux-step-description text-yw-gray-500">
        At this stage, we make minor changes to the overall design that improve
        the user interface and user experience.
      </p>

      <div className="text-yw-gray-300 mb-6 ui-ux-step-description uppercase">
        Deliverables
      </div>
      <p className="ui-ux-step-description !font-semibold">
        UI Polishing & Correction Document For Developers{" "}
      </p>
    </>
  );
};

const AnalyticsReports = () => {
  return (
    <>
      <h4 className="mb-4 ui-ux-small-heading">Analytics Reports</h4>
      <p className="mb-6 ui-ux-step-description text-yw-gray-500">
        They include recommendations on how to improve the design and user
        experience.
      </p>

      <div className="grid grid-cols-6 gap-y-7">
        <div className="col-span-6 sm:col-span-2">
          <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase">
            Tools
          </div>
          <p className="ui-ux-step-description mb-6">Google Analytics</p>
          <p className="ui-ux-step-description mb-6">Hotjar</p>
          <p className="ui-ux-step-description">UX Cam</p>
        </div>

        <div className="col-span-6 sm:col-span-4">
          <div className="mb-6">
            <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase !font-semibold">
              Usage Analytics Reports
            </div>
            <p className="ui-ux-step-description">
              These reports encompass our suggestions on where design
              corrections should be made.
            </p>
          </div>
          <div className="text-yw-gray-300 mb-4 ui-ux-step-description uppercase">
            Data
          </div>
          <ul className="list-disc">
            <li className="mb-4 ml-6 ui-ux-step-description">
              User demographics
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Conversion metrics
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">Sales data</li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Traffic flow and engagement
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Customer care data
            </li>
            <li className="mb-4 ml-6 ui-ux-step-description">Heatmaps</li>
            <li className="mb-4 ml-6 ui-ux-step-description">Scrollmaps</li>
            <li className="mb-4 ml-6 ui-ux-step-description">Form analytics</li>
            <li className="mb-4 ml-6 ui-ux-step-description">
              Poll/form results
            </li>
            <li className="ml-6 ui-ux-step-description">
              User testing results
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const StageAccordion = ({
  heading,
  subHeading,
  components,
  index,
  length,
}: {
  heading: string;
  subHeading: string;
  components: JSX.Element[];
  index: number;
  length: number;
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prevState) => !prevState);

  return (
    <div
      key={`${heading}-${index}`}
      className={cn("col-span-12 gap-y-8 text-start", {
        "border-yw-gray-300 border-b-[1px]": index === length - 1,
      })}
    >
      <div
        className="py-[40px] flex justify-between items-center border-yw-gray-300 border-t-[1px]"
        onClick={handleClick}
      >
        <h4 className="yw-h3 !text-lg">
          {index + 1}. {heading}
        </h4>
        <div className="flex justify-center items-center bg-yw-gray-800 rounded-full min-w-[40px] min-h-[40px] cursor-pointer">
          {open ? <Minus color="#FAFAFC" /> : <Plus color="#FAFAFC" />}
        </div>
      </div>
      <p
        className={`${
          open ? "block" : "hidden"
        } mb-8 text-yw-gray-500 yw-t1 col-span-12`}
      >
        {subHeading}
      </p>
      {open &&
        components.map(({ component }, index) => (
          <div className="mb-8" key={`component_${index}`}>
            {component}
          </div>
        ))}
    </div>
  );
};

const UiUxTabs = React.forwardRef((props, ref) => {
  const [windowHeight, setWindowHeight] = useState(0);

  const sideBarRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLUListElement>(null);

  const competitiveAnalysisRef = useRef<HTMLDivElement>(null);
  const userResearchRef = useRef<HTMLDivElement>(null);
  const uxUiResearchRef = useRef<HTMLDivElement>(null);

  const businessObjectivesRef = useRef<HTMLDivElement>(null);
  const analyticsOverviewRef = useRef<HTMLDivElement>(null);
  const heuristicEvaluationRef = useRef<HTMLDivElement>(null);

  const informationArchitectureRef = useRef<HTMLDivElement>(null);
  const userFlowRef = useRef<HTMLDivElement>(null);
  const lowFidelityRef = useRef<HTMLDivElement>(null);
  const highFidelityRef = useRef<HTMLDivElement>(null);
  const interactivePrototypeRef = useRef<HTMLDivElement>(null);
  const usabilityTestingRef = useRef<HTMLDivElement>(null);

  const moodboardsRef = useRef<HTMLDivElement>(null);
  const visualDesignRef = useRef<HTMLDivElement>(null);
  const uiAnimationsRef = useRef<HTMLDivElement>(null);
  const designSystemRef = useRef<HTMLDivElement>(null);
  const interactivePrototype1Ref = useRef<HTMLDivElement>(null);
  const handoffDocumentsRef = useRef<HTMLDivElement>(null);

  const uiPolishingCorrectionsRef = useRef<HTMLDivElement>(null);
  const analyticsReportsRef = useRef<HTMLDivElement>(null);

  const stagesContent = [
    {
      heading: "Understanding and Audit",
      subHeading:
        "Goal: Analyze the product to learn more about business objectives, user needs, and technical constraints.",
      components: [
        {
          component: <BusinessObjectives />,
          ref: businessObjectivesRef,
          name: "Business Objectives",
        },
        {
          component: <AnalyticsOverview />,
          ref: analyticsOverviewRef,
          name: "Analytics Overview",
        },
        {
          component: <HeuristicEvaluation />,
          ref: heuristicEvaluationRef,
          name: "Heuristic Evaluation",
        },
      ],
    },
    {
      heading: "Research",
      subHeading:
        "Goal: Conduct a throughout research that helps eliminate all uncertainties and determine users’ needs, motivations, and behavior. ",
      components: [
        {
          component: <CompetitiveAnalysis />,
          ref: competitiveAnalysisRef,
          name: "Competitive Analysis",
        },
        {
          component: <UserResearch />,
          ref: userResearchRef,
          name: "User Research",
        },
        {
          component: <UxUiResearch />,
          ref: uxUiResearchRef,
          name: "UX/UI Research",
        },
      ],
    },
    {
      heading: "UX design",
      subHeading:
        "Goal: At this stage, we define a design concept that forms all design elements: relations between the elements, transitions, animations, etc. In short, with the help of various methodologies, we do everything to bring the vision of the product in line with reality.",
      components: [
        {
          component: <InformationArchitecture />,
          ref: informationArchitectureRef,
          name: "Information Architecture",
        },
        { component: <UserFlow />, ref: userFlowRef, name: "User Flow" },
        {
          component: <LowFidelity />,
          ref: lowFidelityRef,
          name: "Low-fi Wireframes",
        },
        {
          component: <HighFidelity />,
          ref: highFidelityRef,
          name: "Hi-fi Wireframes",
        },
        {
          component: <InteractivePrototype />,
          ref: interactivePrototypeRef,
          name: "Heuristic Evaluation",
        },
        {
          component: <UsabilityTesting />,
          ref: usabilityTestingRef,
          name: "Usability testing",
        },
      ],
    },
    {
      heading: "Visual and UI Design",
      subHeading:
        "Goal: At this stage, the graphical interface of the product is developed and standardized.",
      components: [
        { component: <Moodboards />, ref: moodboardsRef, name: "Moodboards" },
        {
          component: <VisualDesign />,
          ref: visualDesignRef,
          name: "Visual Design",
        },
        {
          component: <UiAnimations />,
          ref: uiAnimationsRef,
          name: "UI Animations",
        },
        {
          component: <DesignSystem />,
          ref: designSystemRef,
          name: "Design System",
        },
        {
          component: <InteractivePrototype1 />,
          ref: interactivePrototype1Ref,
          name: "Interactive Prototype",
        },
        {
          component: <HandoffDocuments />,
          ref: handoffDocumentsRef,
          name: "Handoff Documents",
        },
      ],
    },
    {
      heading: "QA and Analisys",
      subHeading:
        "Goal: Find out if the product meets all the requirements and produces the desired result.",
      components: [
        {
          component: <UiPolishingCorrections />,
          ref: uiPolishingCorrectionsRef,
          name: "UI Polishing & Corrections",
        },
        {
          component: <AnalyticsReports />,
          ref: analyticsReportsRef,
          name: "Analytics Reports",
        },
      ],
    },
  ];

  useScrollValue();

  useEffect(() => {
    if (sideBarRef.current && tabsRef.current) {
      sideBarRef.current.style.transition = "top 0.3s";
      tabsRef.current.style.transition = "top 0.3s";
    }
  }, []);

  const scrollToElement = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  const isCurrentSectionDisplayed = (
    sectionBeginning: number,
    sectionEnding: number,
    currentSectionIndex: number
  ) => {
    const isFirstSection = currentSectionIndex === 0;
    const beginningThreshold = isFirstSection
      ? windowHeight + 150
      : windowHeight + 13.5;

    return (
      sectionBeginning! < beginningThreshold &&
      sectionEnding! > windowHeight - 70.5
    );
  };

  return (
    <section
      ref={ref}
      data-sectionid={props.section_navigation_name}
      data-section-name={props.dataSectionName}
    >
      <div className="py-28 bg-yw-gray-100 lg:block hidden">
        <div className="container grid grid-cols-12 gap-8">
          <h2 className="mb-8 col-span-12 text-start yw-h2">Steps</h2>
          <div className="!grid grid-cols-12 gap-y-10 md:gap-10 text-start col-span-12 items-start">
            <ul
              ref={tabsRef}
              className="sticky top-[72px] flex gap-6 bg-yw-gray-100 py-4
            col-span-12 text-center z-[2]"
            >
              {stagesContent.map(({ heading, components }, index) => {
                const firstElementRef = components[0].ref;
                const lastElementRef = components[components.length - 1].ref;

                const sectionBeginning =
                  firstElementRef.current?.getBoundingClientRect().top;
                const sectionEnding =
                  lastElementRef.current?.getBoundingClientRect().bottom;

                const isActive = isCurrentSectionDisplayed(
                  sectionBeginning!,
                  sectionEnding!,
                  index
                );
                const isActiveStyle = isActive
                  ? "bg-yw-cta-default text-white"
                  : "bg-[#E7E9EA] text-yw-primary-default hover:text-white";

                return (
                  <Button
                    key={`step-tab-${index}`}
                    id={`ux-ui-steps-tab-${index}`}
                    className={`${isActiveStyle} btn group rounded-full //btn-cta flex items-center justify-center whitespace-nowrap font-montserrat text-lg leading-none w-full sm:w-fit`}
                    size="md"
                    onClick={() => scrollToElement(firstElementRef)}
                  >
                    {heading}
                  </Button>
                );
              })}
            </ul>

            <div
              className={`sticky top-[209px] col-span-6 pt-5`}
              ref={sideBarRef}
            >
              {stagesContent.map(
                ({ heading, subHeading, components }, index) => {
                  const firstRef = components[0].ref;
                  const lastRef = components[components.length - 1].ref;

                  const sectionBeginning =
                    firstRef.current?.getBoundingClientRect().top;

                  const sectionEnding =
                    lastRef.current?.getBoundingClientRect().bottom;

                  const isActive = isCurrentSectionDisplayed(
                    sectionBeginning!,
                    sectionEnding!,
                    index
                  );

                  const isDisplayedStyle = isActive ? "block" : "hidden";

                  return (
                    <div key={`${heading}-index-${index}`}>
                      <div
                        className={`${isDisplayedStyle} relative`}
                        key={`stage-header-${index}`}
                      >
                        <p
                          className="text-9xl text-yw-gray-100 font-bold font-montserrat
                      text-stroke mb-14 absolute z-1 -top-[60px] left-0 translate-x-0"
                        >
                          {(index + 1).toString().padStart(2, "0")}
                        </p>
                        <h4 className="mb-3 ui-ux-step-heading relative z-3">
                          {heading}
                        </h4>
                        <p className="mb-8 ui-ux-step-description text-yw-gray-500 col-span-5">
                          {subHeading}
                        </p>
                      </div>

                      <div className={`text-lg ${isDisplayedStyle}`}>
                        <p className="mb-6 uppercase text-yw-gray-300 yw-t1">
                          stages
                        </p>
                        <ul>
                          {components.map(({ name, ref }, index) => {
                            const blockBeginning =
                              ref.current?.getBoundingClientRect().top;

                            const blockEnding =
                              ref.current?.getBoundingClientRect().bottom;

                            const isActiveStyle =
                              blockBeginning! < windowHeight - 40 &&
                              blockEnding! > windowHeight - 124
                                ? "border-l-2 border-sky-500 pl-3 text-yw-primary-default"
                                : "text-yw-gray-500";

                            return (
                              <li
                                className={`${isActiveStyle} mb-4 yw-t1`}
                                key={`stage-item-${index}`}
                              >
                                <span
                                  className="cursor-pointer"
                                  onClick={() => scrollToElement(ref)}
                                >
                                  {name}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            <div className="col-span-6 hidden sm:block pt-[300px]">
              {stagesContent.map((item, index) => {
                return item.components.map((el) => {
                  const { component, ref } = el;

                  return (
                    <div
                      className="mb-[84px]"
                      ref={ref}
                      key={`stage-content-${el.name}-${index}`}
                    >
                      {component}
                    </div>
                  );
                });
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="py-28 bg-yw-gray-100 block lg:hidden">
        <div className="container grid grid-cols-12">
          <h2 className="mb-11 sm:mb-14 col-span-12 text-start yw-h3 !text-2xl">
            Steps
          </h2>
          {stagesContent.map(({ heading, subHeading, components }, index) => {
            return (
              <StageAccordion
                key={`${heading}-${index}`}
                heading={heading}
                subHeading={subHeading}
                components={components}
                length={stagesContent.length}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
});

UiUxTabs.displayName = "UiUxTabs";

export default UiUxTabs;
