import React from 'react';
import {gql} from 'apollo-boost'
import { Mutation } from 'react-apollo'

const LIKE = gql`
    mutation addLike($_id)

`