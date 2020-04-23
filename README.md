# Image Overlay Actions

This repo allows you to select portions of the underlying image.

## Table of Contents

1. [Setup](#setup)
2. [Libraries Used](#libraries-used)
3. [Component Tree](#component-tree)

## Setup

    yarn
    yarn start

## Libraries Used

1. Typescript
2. [Antd](https://ant.design/): It has the inbuilt popovers and provisions for layout.
3. [react-region-select](https://github.com/casavi/react-region-select)

Region-Select library is a mod on [React Image Crop](https://github.com/DominicTobias/react-image-crop). This library fits our use-case perfectly, because it has a customizable select portion. It enables actions on the select portion, has inbuilt handling. Converted this library from js to tsx. Next step would be to push my changes as a pull request to the repo, so a maintainable upstream can be created.

## Component Tree

It has 3 main components

Sidebar(ToolBar)
ObjectList(Right Sidebar)
ImageOverlay(Base Logic)

Since ImageOverlay contains all the underlying logic and binds the rest together. The tree is like the following:

    App
    |
    ImageOverlay
    |           |
    SideBar     ObjectList
