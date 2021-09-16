import Button from "../components/Button"

export default {
    title: "Components/Button",
    component: Button,
    argTypes: { handleClick: {action: "handleClick" } },
}
const Template = args => <Button {...args} />


export const Purple = Template.bind({});
//() => <Button label= "Press me" backgroundColor="purple" />
Purple.args = {
    backgroundColor: "purple",
    label: "Press me",
    size: "md",
}

export const Green = Template.bind({});
Green.args = {
    backgroundColor: "green",
    label: "Press me",
    size: "md",
}
export const Small = Template.bind({});
Small.args = {
    backgroundColor: "green",
    label: "Press me",
    size: "sm",
}
export const Large = Template.bind({});
Large.args = {
    backgroundColor: "green",
    label: "Press me",
    size: "lg",
}
export const LongLabel = Template.bind({});
LongLabel.args = {
    backgroundColor: "green",
    label: "This is a very long label",
    size: "md",
}
