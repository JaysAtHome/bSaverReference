import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  Alert,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/styles';
import { Profile, Expense } from '../types/types';

// Mock Data
const sampleProfiles: Profile[] = [
  { id: '1', name: 'Sarah', image: 'https://wallpapers.com/images/hd/placeholder-profile-icon-20tehfawxt5eihco.jpg', balance: 17800 },
  { id: '2', name: 'James', image: 'https://wallpapers.com/images/hd/placeholder-profile-icon-20tehfawxt5eihco.jpg', balance: 9500 },
];

const sampleExpenses: Expense[] = [
  { id: '1', category: 'Coffee', description: 'with Fresh Breast', amount: 80, date: 'Friday' },
  { id: '2', category: 'Gift', description: 'for Auditory Cookyload', amount: 1500, date: 'Friday' },
];

const ParentHome = () => {
  const [profiles, setProfiles] = useState<Profile[]>(sampleProfiles);
  const [selectedProfile, setSelectedProfile] = useState<Profile>(sampleProfiles[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingProfile, setEditingProfile] = useState<Profile | null>(null);
  const [tempName, setTempName] = useState('');

  const handleProfilePress = (profile: Profile) => {
    setSelectedProfile(profile);
    setModalVisible(false);
  };

  const handleAddProfile = () => {
    const newProfile: Profile = {
      id: Math.random().toString(36).substring(2, 9),
      name: 'Teen',
      image: 'https://wallpapers.com/images/hd/placeholder-profile-icon-20tehfawxt5eihco.jpg',
      balance: 0,
    };
    setProfiles([...profiles, newProfile]);
  };

  const handleRemoveProfile = (profileId: string) => {
    if (profiles.length <= 1) {
      Alert.alert('Error', 'You must keep at least one profile');
      return;
    }

    Alert.alert('Delete Profile', 'Are you sure you want to delete this profile?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          const updatedProfiles = profiles.filter((p) => p.id !== profileId);
          setProfiles(updatedProfiles);
          if (selectedProfile.id === profileId) {
            setSelectedProfile(updatedProfiles[0]);
          }
        },
      },
    ]);
  };

  const openEditModal = (profile: Profile) => {
    setEditingProfile(profile);
    setTempName(profile.name);
    setEditModalVisible(true);
  };

  const handleSaveEdit = () => {
    if (!editingProfile || !tempName.trim()) return;

    const updatedProfiles = profiles.map((profile) =>
      profile.id === editingProfile.id ? { ...profile, name: tempName } : profile
    );

    setProfiles(updatedProfiles);
    setSelectedProfile(updatedProfiles.find((p) => p.id === editingProfile.id) || updatedProfiles[0]);
    setEditModalVisible(false);
  };

  const renderExpenseItem = ({ item }: { item: Expense }) => (
    <View style={styles.expenseItem}>
      <View style={styles.expenseCategoryIcon}>
        <Text style={styles.expenseCategoryText}>{item.category.charAt(0)}</Text>
      </View>
      <View style={styles.expenseDetails}>
        <Text style={styles.expenseCategory}>{item.category}</Text>
        <Text style={styles.expenseDescription}>{item.description}</Text>
      </View>
      <Text style={styles.expenseAmount}>₱{item.amount.toLocaleString()}</Text>
    </View>
  );

  const renderProfileItem = (profile: Profile) => (
    <View style={styles.profileItemContainer}>
      <TouchableOpacity style={styles.profileItem} onPress={() => handleProfilePress(profile)}>
        <Image source={{ uri: profile.image }} style={styles.modalProfileImage} />
        <Text style={styles.profileName}>{profile.name}</Text>
      </TouchableOpacity>
      <View style={styles.profileActions}>
        <TouchableOpacity onPress={() => openEditModal(profile)}>
          <Text style={styles.editButtonText}>✏️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRemoveProfile(profile.id)}>
          <Text style={styles.deleteButtonText}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{selectedProfile.name}</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={{ uri: selectedProfile.image }} style={styles.profileImage} />
        </TouchableOpacity>
      </View>

      {/* Profile Selection Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Manage Profiles</Text>
              <ScrollView>{profiles.map(renderProfileItem)}</ScrollView>
              <TouchableOpacity onPress={handleAddProfile} style={styles.addProfileButton}>
                <Text style={styles.addProfileButtonText}>+ Add New Profile</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </Pressable>
      </Modal>

      {/* Edit Profile Modal */}
      <Modal visible={editModalVisible} animationType="fade" transparent onRequestClose={() => setEditModalVisible(false)}>
        <Pressable style={styles.modalOverlay} onPress={() => setEditModalVisible(false)}>
          <TouchableWithoutFeedback>
            <View style={styles.editModalContainer}>
              <Text style={styles.modalTitle}>Edit Profile</Text>
              <TextInput
                style={styles.editInput}
                value={tempName}
                onChangeText={setTempName}
                placeholder="Enter new name"
                autoFocus
              />
              <View style={styles.editButtonRow}>
                <TouchableOpacity style={styles.cancelButton} onPress={() => setEditModalVisible(false)}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton} onPress={handleSaveEdit}>
                  <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Pressable>
      </Modal>

      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <View style={styles.balanceTextGroup}>
          <Text style={styles.balanceAmount}>₱{selectedProfile.balance.toLocaleString()}</Text>
          <Text style={styles.balanceCurrency}>PHP</Text>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.allowanceButton}>
          <Text style={styles.allowanceButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Expenses Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>All Expenses</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllButton}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Expenses List */}
      <FlatList
        data={sampleExpenses}
        keyExtractor={(item) => item.id}
        renderItem={renderExpenseItem}
        contentContainerStyle={styles.expenseList}
      />
    </SafeAreaView>
  );
};

export default ParentHome;
