import styled from 'styled-components/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type TransactionActionsProps = {
    onAddMoney: () => void,
    onRemoveMoney: () => void
}

export const TransactionActions = (props: TransactionActionsProps) => {
    return(
        <TransactionActionsView>
            <TransactionIconView onPress={props.onAddMoney}>
                <FontAwesome name="plus" size={20} color="#000" style={{alignSelf: 'center'}}/>
            </TransactionIconView>
            <TransactionIconView onPress={props.onRemoveMoney}>
                <FontAwesome name="minus" size={20} color="#000" style={{alignSelf: 'center'}}/>
            </TransactionIconView>
        </TransactionActionsView>
    )
}

const TransactionActionsView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-left: 30%;
    padding-right: 30%;
`;

const TransactionIconView = styled.TouchableOpacity`
    border-radius: 100px;
    background-color: #f0f0f0;
    height: 50px;
    width: 50px;
    justify-content: center;
`;
