import styled from 'styled-components/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useTransaction } from '../../../redux/features/transaction/useTransaction';

export const TransactionActions = () => {
    const {navigate} = useNavigation();
    const {setType} = useTransaction();

    const handleAddMoney = () => {
        setType('input');
        navigate('register');
    }
    
    const handleRemoveMoney = () => {
        setType('output');
        navigate('register');
    }

    return(
        <TransactionActionsView>
            <TransactionIconView onPress={handleAddMoney}>
                <FontAwesome name="plus" size={20} color="#000" style={{alignSelf: 'center'}}/>
            </TransactionIconView>
            <TransactionIconView onPress={handleRemoveMoney}>
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
