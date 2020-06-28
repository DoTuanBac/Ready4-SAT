import React from "react";
import {View, Text, Image} from 'react-native';

export default function Avatar(props) {
    return (
      <Image
          style={{
              height: props.size,
              width: props.size,
              borderRadius: 100,
          }}
          source={{uri: props.uri}}
      />
    );
}
