import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { HorizontalList } from "./horizontal-list"

declare var module

storiesOf("HorizontalList", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <HorizontalList text="HorizontalList" />
      </UseCase>
    </Story>
  ))
