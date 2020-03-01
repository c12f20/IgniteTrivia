import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { HorizontalListItem } from "./horizontal-list-item"

declare var module

storiesOf("HorizontalListItem", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <HorizontalListItem text="HorizontalListItem" />
      </UseCase>
    </Story>
  ))
