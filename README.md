# ui-lti-courses

Copyright (C) 2018-2019 The Open Library Foundation

This software is distributed under the terms of the Apache License,
Version 2.0. See the file "[LICENSE](LICENSE)" for more information.

## DEPRECATED

This module has reached its end of life and is out of support.

## Overview

This is a Folio Stripes settings module that provides a front-end for configuring various things for the [edge-lti-courses Edge module](https://github.com/doytch/edge-lti-courses) that uses the [LTI 1.3 standard](https://www.imsglobal.org/spec/lti/v1p3/) to connect Learning Management Systems (LMSs) such as Sakai, Canvas, or Blackboard to Folio's Course Reserves app.

## Usage

Once included in a Folio Stripes platform such as [platform-complete](https://github.com/folio-org/platform-complete), the Settings page will include a new set of *LTI Course Reserves* settings.

### LTI Platforms

LTI Platforms can install LTI Tools. In this case, an LMS like Sakai is an LTI Platform and `edge-lti-courses` is an LTI Tool. The Courses Edge module can handle requests from multiple platforms. This is useful for when you have separate testing and production instances of your LMS.

For security reasons, each platform must be preregistered with the tool according to the LTI spec. You can add new platforms using this settings module and configure various required and optional fields.
