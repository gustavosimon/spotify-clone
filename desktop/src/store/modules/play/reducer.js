import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
    play: false,
    music: {},
};

export default function Play(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case types.PLAY_MUSIC:
                draft.music = action.payload.music
                    ? action.payload.music
                    : draft.music;
                draft.play = true;
                break;
            case types.PAUSE_MUSIC:
                draft.play = false;
                break;
            default:
        }
    });
}
