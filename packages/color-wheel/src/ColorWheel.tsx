import colorsys from "colorsys";
import { Component, createElement } from "react";
import { ViewStyle } from "react-native";
import { ColorWheel as RNColorWheel, HSV } from "react-native-color-wheel";

import { ColorWheelProps } from "../typings/ColorWheelProps";
import { flattenStyles, Style } from "./utils/common";

interface ColorWheelStyle extends Style {
    container: ViewStyle;
    thumbnail: ViewStyle;
}

const defaultColorWheelStyle: ColorWheelStyle = {
    container: {},
    thumbnail: {
        width: 50
    }
};

export class ColorWheel extends Component<ColorWheelProps<ColorWheelStyle>> {
    private readonly onChangeHandler = this.onChange.bind(this);
    private readonly onChangeCompleteHandler = this.onChangeComplete.bind(this);
    private readonly styles = flattenStyles(defaultColorWheelStyle, this.props.style);

    render(): JSX.Element | null {
        return this.props.color.status === ValueStatus.Available ? (
            <RNColorWheel
                style={this.styles.container}
                initialColor={this.props.color.value}
                thumbSize={Number(this.styles.thumbnail.width) || Number(this.styles.thumbnail.height)}
                onColorChange={this.onChangeHandler}
                onColorChangeComplete={this.onChangeCompleteHandler}
                thumbStyle={this.styles.thumbnail}
            />
        ) : null;
    }

    private onChange(hsv: HSV): void {
        this.setValue(hsv);

        if (this.props.onChange && this.props.onChange.canExecute) {
            this.props.onChange.execute();
        }
    }

    private onChangeComplete(hsv: HSV): void {
        this.setValue(hsv);

        if (this.props.onChangeComplete && this.props.onChangeComplete.canExecute) {
            this.props.onChangeComplete.execute();
        }
    }

    private setValue(hsv: HSV): void {
        if (this.props.color.status === ValueStatus.Available) {
            const value = colorsys.hsvToHex(hsv);
            this.props.color.setValue(value);
        }
    }
}
