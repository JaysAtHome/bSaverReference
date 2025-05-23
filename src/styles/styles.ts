import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // App Layout
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  // Balance Card(yung allowance)
  balanceCard: {
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  balanceTextGroup: {
    flexDirection: 'column',
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  balanceCurrency: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 4,
  },
  allowanceButton: {
    backgroundColor: '#fff',
    borderRadius: 16,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  allowanceButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    lineHeight: 28,
  },

  // Expense
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  viewAllButton: {
    fontSize: 14,
    color: '#888',
    fontWeight: '500',
  },
  expenseList: {
    paddingBottom: 20,
  },
  expenseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  expenseCategoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  expenseCategoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  expenseDetails: {
    flex: 1,
  },
  expenseCategory: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  expenseDescription: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  expenseAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },

  // styles for profile
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '60%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
  },
  profileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 8,
  },
  modalProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
    color: '#000',
  },
  addProfileButton: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  addProfileButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  deleteButton: {
  marginLeft: 'auto',
  paddingHorizontal: 10,
  },
  deleteButtonText: {
  fontSize: 24,
  color: '#FF3B30',
  },
  profileItemContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 15,
  },
  // Profile Actions
profileActions: {
  flexDirection: 'row',
  gap: 15,
  marginLeft: 'auto',
 },
  editButtonText: {
  fontSize: 18,
 },


// Edit Modal
  editModalContainer: {
  backgroundColor: '#fff',
  padding: 20,
  borderRadius: 20,
  width: '80%',
  alignSelf: 'center',
  marginTop: 'auto',
  marginBottom: 'auto',
  },
  editInput: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 10,
  padding: 15,
  marginVertical: 15,
  fontSize: 16,
  },
  editButtonRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  },
  cancelButton: {
  backgroundColor: '#f0f0f0',
  padding: 15,
  borderRadius: 10,
  flex: 1,
  marginRight: 10,
  alignItems: 'center',
  },
  saveButton: {
  backgroundColor: '#000',
  padding: 15,
  borderRadius: 10,
  flex: 1,
  alignItems: 'center',
  },
  cancelButtonText: {
  color: '#000',
  fontWeight: 'bold',
  },
  saveButtonText: {
  color: '#fff',
  fontWeight: 'bold',
  },
});

export default styles;