// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  describeIndividualFeatureImportance,
  modelAssessmentDatasets
} from "@responsible-ai/e2e";
const datasetShape =
  modelAssessmentDatasets.DiabetesRegressionModelDebuggingNewModelOverviewExperience;
describeIndividualFeatureImportance(
  datasetShape,
  "DiabetesRegressionModelDebuggingNewModelOverviewExperience"
);
